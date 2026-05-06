import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { UsersService } from 'src/users/users.service'
import { EmailService } from 'src/email/email.service'
import { generateToken } from 'src/utils/generate-token.util'
import { hash } from 'argon2'

@Injectable()
export class AuthAccountService {
	constructor(
		private prisma: PrismaService,
		private configService: ConfigService,
		private usersService: UsersService,
		private emailService: EmailService
	) {}

	async verifyEmail(token: string) {
		const user = await this.prisma.user.findFirst({
			where: {
				emailVerificationToken: token,
				emailVerificationTokenExpiresAt: {
					gt: new Date()
				}
			}
		})

		if (!user) {
			throw new BadRequestException(
				'Invalid or expired email verification token'
			)
		}

		await this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				isEmailVerified: true,
				emailVerificationToken: null,
				emailVerificationTokenExpiresAt: null
			}
		})

		return true
	}

	async requestPasswordReset(email: string) {
		const user = await this.usersService.findByEmail(email)
		if (!user) {
			return true
		}

		const resetToken = generateToken()
		await this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				resetPasswordToken: resetToken,
				resetPasswordTokenExpiresAt: new Date(Date.now() + 60 * 60 * 1000)
			}
		})

		const resetUrl = `${this.configService.get<string>('HOST')}/reset-password?token=${resetToken}`

		await this.emailService.sendResetPassword(email, '', resetUrl)

		return true
	}

	async resetPassword(token: string, newPassword: string) {
		const user = await this.prisma.user.findFirst({
			where: {
				resetPasswordToken: token,
				resetPasswordTokenExpiresAt: {
					gt: new Date()
				}
			}
		})

		if (!user) {
			throw new BadRequestException(
				'Invalid or expired password reset token'
			)
		}

		await this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				password: await hash(newPassword),
				resetPasswordToken: null,
				resetPasswordTokenExpiresAt: null
			}
		})

		return true
	}
}
