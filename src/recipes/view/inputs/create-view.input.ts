import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateViewInput {
	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	recipeId: string
}
