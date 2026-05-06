import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, MinLength } from 'class-validator'

@InputType()
export class AuthInput {
	@Field({
		nullable: false
	})
	@IsEmail({}, { message: 'Enter a valid email address' })
	email: string

	@Field()
	@MinLength(8, { message: 'Password must contain at least 8 characters' })
	password: string
}
