import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeLikeInput {
	@Field(() => String, { nullable: false })
	recipeId!: string
}
