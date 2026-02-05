import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateLikeInput {
	@Field(() => String, { nullable: false })
	commentId!: string
}
