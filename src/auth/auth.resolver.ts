import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthService } from 'src/auth/auth.service'
import { AuthInput } from 'src/auth/auth.input'
import { AuthResponse } from 'src/auth/auth.interface'
import type { IGqlContext } from 'src/app.interface'
import { BadRequestException } from '@nestjs/common'

@Resolver()
export class AuthResolver {
	constructor(private authService: AuthService) {}

	@Mutation(() => AuthResponse)
	async register(
		@Args('data') input: AuthInput,
		@Context() { res }: IGqlContext
	) {
		const { refreshToken, ...response } = await this.authService.register(input)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)
		return response
	}

	@Mutation(() => AuthResponse)
	async login(@Args('data') input: AuthInput, @Context() { res }: IGqlContext) {
		const { refreshToken, ...response } = await this.authService.login(input)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)
		return response
	}

	@Query(() => AuthResponse)
	async refreshToken(@Context() { req, res }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authService.REFRESH_TOKEN_NAME]
		if (!initialRefreshToken) {
			this.authService.toggleRefreshTokenCookie(res, null)
			throw new BadRequestException('No refresh token')
		}
		const { refreshToken, ...response } =
			await this.authService.getNewTokens(initialRefreshToken)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)
		return response
	}

	@Mutation(() => Boolean)
	logout(@Context() { req, res }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authService.REFRESH_TOKEN_NAME]
		this.authService.toggleRefreshTokenCookie(res, null)
		if (!initialRefreshToken) {
			throw new BadRequestException('No refresh token')
		}
		return true
	}
}
