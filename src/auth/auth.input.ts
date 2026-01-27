import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AuthInput {
	@Field({
		nullable: false,
	})
	email: string

	@Field({
		description: 'Password must be at least 8 characters long',
		nullable: false,
	})
	password: string
}