import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthService } from 'src/auth/auth.service'
import { AuthInput } from 'src/auth/inputs/auth.input'
import { AuthResponse } from 'src/auth/auth.interface'
import type { IGqlContext } from 'src/app.interface'
import { BadRequestException } from '@nestjs/common'
import { VerifyCaptcha } from 'src/auth/decorators/captcha.decorator'
import { AuthAccountService } from 'src/auth/auth-account.service'
import { ResetPasswordRequestInput } from 'src/auth/inputs/reset-password-request.input'
import { ResetPasswordInput } from 'src/auth/inputs/reset-password.input'

@Resolver()
export class AuthResolver {
	constructor(
		private authService: AuthService,
		private authAccountService: AuthAccountService
	) {}

	@Mutation(() => AuthResponse)
	@VerifyCaptcha()
	async register(
		@Args('data') input: AuthInput,
		@Context() { res }: IGqlContext
	) {
		const { refreshToken, accessToken, ...response } =
			await this.authService.register(input)
		this.authService.toggleAccessTokenCookie(res, accessToken)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)
		return response
	}

	@Mutation(() => AuthResponse)
	@VerifyCaptcha()
	async login(@Args('data') input: AuthInput, @Context() { res }: IGqlContext) {
		const { refreshToken, accessToken, ...response } =
			await this.authService.login(input)
		this.authService.toggleAccessTokenCookie(res, accessToken)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)
		return response
	}

	@Mutation(() => Boolean)
	@VerifyCaptcha()
	async verifyEmail(
		@Args('email') email: string,
		@Args('token') input: string
	) {
		return await this.authAccountService.verifyEmail(input)
	}

	@Mutation(() => Boolean)
	@VerifyCaptcha()
	async RequestPasswordReset(@Args('data') input: ResetPasswordRequestInput) {
		return await this.authAccountService.requestPasswordReset(input.email)
	}

	@Mutation(() => Boolean)
	@VerifyCaptcha()
	async resetPassword(@Args('data') input: ResetPasswordInput) {
		return await this.authAccountService.resetPassword(input.token, input.newPassword)
	}

	@Query(() => AuthResponse)
	async refreshToken(@Context() { req, res }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authService.REFRESH_TOKEN_NAME]
		if (!initialRefreshToken) {
			this.authService.toggleAccessTokenCookie(res, null)
			this.authService.toggleRefreshTokenCookie(res, null)
			throw new BadRequestException('No refresh token')
		}
		const { refreshToken, accessToken, ...response } =
			await this.authService.getNewTokens(initialRefreshToken)
		this.authService.toggleAccessTokenCookie(res, accessToken)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)
		return response
	}

	@Mutation(() => Boolean)
	logout(@Context() { req, res }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authService.REFRESH_TOKEN_NAME]
		this.authService.toggleAccessTokenCookie(res, null)
		this.authService.toggleRefreshTokenCookie(res, null)
		if (!initialRefreshToken) {
			throw new BadRequestException('No refresh token')
		}
		return true
	}
}
