import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { render } from '@react-email/render'
import VerificationEmail from './templates/verification-email'
import ResetPasswordEmail from 'src/email/templates/reset-password'

@Injectable()
export class EmailService {
	constructor(private readonly mailerService: MailerService) {}

	sendEmail(to: string, subject: string, html: string): Promise<void> {
		return this.mailerService.sendMail({
			to,
			subject,
			html
		})
	}

	async sendVerification(
		to: string,
		userName: string,
		verificationLink: string
	) {
		const html = await render(
			VerificationEmail({ userName, url: verificationLink })
		)
		return await this.sendEmail(to, 'Подтверждение электронной почты', html)
	}

	async sendResetPassword(
		to: string,
		userName: string,
		verificationLink: string
	) {
		const html = await render(
			ResetPasswordEmail({ userName, url: verificationLink })
		)
		return await this.sendEmail(to, 'Сброс пароля', html)
	}
}
