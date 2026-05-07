import { Field, InputType } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'

@InputType()
export class RequestPasswordResetInput {
	@Field({
		nullable: false
	})
	@IsEmail({}, { message: 'Enter a valid email address' })
	email: string
}
