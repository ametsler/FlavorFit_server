import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateTagInput {
	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	name!: string
}
