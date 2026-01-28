import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { AuthInput } from 'src/auth/auth.input'
import { hash, verify } from 'argon2'
import { IAuthTokenData } from 'src/auth/auth.interface'
import { UsersService } from 'src/users/users.service'
import { Response } from 'express'
import { isDev } from 'src/utils/is-dev.utils'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private configService: ConfigService,
		private jwtService: JwtService,
		private usersService: UsersService
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
					password: await hash(input.password)
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

	async login(input: AuthInput) {
		const user = await this.validateUser(input)

		const tokens = this.generateTokens({
			id: user.id,
			role: user.role
		})

		return { user, ...tokens }
	}

	private async validateUser(input: AuthInput) {
		const email = input.email

		const user = await this.usersService.findByEmail(email)
		if (!user) {
			throw new NotFoundException('Invalid email or password')
		}

		const isPasswordValid = await verify(user.password, input.password)
		if (!isPasswordValid) {
			throw new NotFoundException('Invalid email or password')
		}

		return user
	}

	private generateTokens(data: IAuthTokenData) {
		const accessToken = this.jwtService.sign(data, {
			expiresIn: '1h'
		})

		const refreshToken = this.jwtService.sign(data, {
			expiresIn: `${this.configService.getOrThrow('EXPIRE_DAY_REFRESH_TOKEN')}d`
		})
		return {
			accessToken,
			refreshToken
		}
	}

	toggleRefreshTokenCookie(response: Response, token: string | null) {
		const isRemoveCookie = !token

		const expiresIn = isRemoveCookie
			? new Date(0)
			: new Date(
					Date.now() +
						this.configService.getOrThrow('EXPIRE_DAY_REFRESH_TOKEN') *
							24 *
							60 *
							60 *
							1000
				)

		response.cookie(this.REFRESH_TOKEN_NAME, token, {
			httpOnly: true,
			domain: this.configService.getOrThrow('DOMAIN'),
			expires: expiresIn,
			sameSite: isDev(this.configService) ? 'none' : 'strict',
			secure: true
		})
	}
}
