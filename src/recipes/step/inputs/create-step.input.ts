import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStepInput {
	@Field(() => Int, { nullable: false })
	order!: number

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => String, { nullable: false })
	description!: string

	@Field(() => String, { nullable: true })
	imgUrl!: string | null

	@Field(() => String, { nullable: true })
	recipeId!: string | null
}
