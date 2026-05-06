import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { AuthInput } from 'src/auth/inputs/auth.input'
import { hash, verify } from 'argon2'
import { TAuthTokenData } from 'src/auth/auth.interface'
import { UsersService } from 'src/users/users.service'
import { Response } from 'express'
import { isDev } from 'src/utils/is-dev.utils'
import { generateToken } from 'src/utils/generate-token.util'
import { EmailService } from 'src/email/email.service'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private configService: ConfigService,
		private jwtService: JwtService,
		private usersService: UsersService,
		private emailService: EmailService
	) {}

	readonly ACCESS_TOKEN_NAME = 'accessToken' as const
	readonly REFRESH_TOKEN_NAME = 'refreshToken' as const

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

			const emailVerificationToken = generateToken()

			const user = await this.prisma.user.create({
				data: {
					email: email,
					password: await hash(input.password),
					emailVerificationToken,
					emailVerificationTokenExpiresAt: new Date(Date.now() + 60 * 60 * 1000)
				}
			})

			const tokens = this.generateTokens({
				id: user.id,
				role: user.role
			})

			const verificationUrl = `${this.configService.get<string>('HOST')}/verify-email/${email}/${emailVerificationToken}`

			await this.emailService.sendVerification(email, '', verificationUrl)

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

	async getNewTokens(refreshToken: string) {
		const data = this.jwtService.verify<TAuthTokenData>(refreshToken)
		if (!data) {
			throw new BadRequestException('Invalid refresh token')
		}
		const user = await this.usersService.findById(data.id)

		if (!user) {
			throw new NotFoundException('User not found')
		}

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

	private generateTokens(data: TAuthTokenData) {
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

	toggleAccessTokenCookie(response: Response, token: string | null) {
		this.toggleAuthTokenCookie(
			response,
			this.ACCESS_TOKEN_NAME,
			token,
			new Date(
				Date.now() +
					this.configService.getOrThrow('EXPIRE_MINUTES_ACCESS_TOKEN') *
						60 *
						1000
			)
		)
	}

	toggleRefreshTokenCookie(response: Response, token: string | null) {
		this.toggleAuthTokenCookie(
			response,
			this.REFRESH_TOKEN_NAME,
			token,
			new Date(
				Date.now() +
					this.configService.getOrThrow('EXPIRE_DAY_REFRESH_TOKEN') *
						24 *
						60 *
						60 *
						1000
			)
		)
	}

	private toggleAuthTokenCookie(
		response: Response,
		name: AuthService['REFRESH_TOKEN_NAME'] | AuthService['ACCESS_TOKEN_NAME'],
		token: string | null,
		expires: Date
	) {
		const isRemoveCookie = !token

		const expiresIn = isRemoveCookie ? new Date(0) : expires

		response.cookie(name, token, {
			httpOnly: true,
			domain: this.configService.getOrThrow('DOMAIN'),
			expires: expiresIn,
			sameSite: isDev(this.configService) ? 'none' : 'strict',
			secure: true
		})
	}
}
