import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator'

@InputType()
export class CreateRecipeIngredientInput {
	@Field(() => Number, { nullable: false })
	@IsPositive()
	quantity!: number

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsNotEmpty()
	recipeId!: string | null

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	ingredientId!: string
}
