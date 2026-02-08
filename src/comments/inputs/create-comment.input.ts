import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateCommentInput {
	@Field(() => String, { nullable: false })
	content!: string

	@Field(() => String, { nullable: false })
	recipeId!: string
}
