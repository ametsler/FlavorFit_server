import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateViewInput {
	@Field(() => String, { nullable: false })
	recipeId: string
}
