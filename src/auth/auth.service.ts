import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { AuthInput } from 'src/auth/auth.input'
import { hash } from 'argon2'
import { IAuthTokenData } from 'src/auth/auth.interface'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private configService: ConfigService,
		private jwtService: JwtService
	) {}

	private REFRESH_TOKEN_NAME = 'refreshToken'

	async register(input: AuthInput) {
		try {
			const email = input.email.toLowerCase()
			const emailExists = await this.prisma.user.findFirst({
				where: {
					email: {
						equals: email,
						mode: 'insensitive'
					}
				}
			})
			if (emailExists) {
				throw new BadRequestException('User already exists with: ' + email)
			}

			const user = await this.prisma.user.create({
				data: {
					email: email,
					password: await hash(input.password),
				}
			})

			const tokens = this.generateTokens({
				id: user.id,
				role: user.role
			})

			return { user, ...tokens }
		} catch (error) {
			throw new BadRequestException('Registration failed: ' + error)
		}
	}

	private generateTokens(data: IAuthTokenData) {
		const accessToken = this.jwtService.sign(data, {
			expiresIn: '1h'
		})

		const refreshToken = this.jwtService.sign(data, {
			expiresIn: `${this.configService.get('EXPIRE_DAY_REFRESH_TOKEN')}d`
		})
		return {
			accessToken,
			refreshToken
		}
	}
}
