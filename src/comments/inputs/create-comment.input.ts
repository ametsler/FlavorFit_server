import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateCommentInput {
	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	content!: string

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	recipeId!: string
}
