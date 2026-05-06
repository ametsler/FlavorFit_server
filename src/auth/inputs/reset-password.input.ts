import { Field, InputType } from '@nestjs/graphql'
import { MinLength } from 'class-validator'

@InputType()
export class ResetPasswordInput {
	@Field()
	@MinLength(8, { message: 'Password must contain at least 8 characters' })
	newPassword: string

	@Field({
		nullable: false
	})
	token: string
}
