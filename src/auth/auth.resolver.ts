import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from 'src/auth/auth.service'
import { AuthInput } from 'src/auth/auth.input'
import { AuthResponse } from 'src/auth/auth.interface'
import type { IGqlContext } from 'src/app.interface'

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
}
