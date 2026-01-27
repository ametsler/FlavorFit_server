import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from 'src/auth/auth.service'
import { AuthInput } from 'src/auth/auth.input'
import { AuthResponse } from 'src/auth/auth.interface'

@Resolver()
export class AuthResolver {
	constructor(
		private authService: AuthService
	) {}

	@Mutation(() => AuthResponse)
	async register(@Args('data') input: AuthInput) {
		return this.authService.register(input)
	}
}
