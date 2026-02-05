import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { RecipeModel } from 'src/recipes/models/recipe.model'

@ObjectType()
export class RecipeStepModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => Int, { nullable: false })
	order!: number

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => String, { nullable: false })
	description!: string

	@Field(() => String, { nullable: true })
	imgUrl!: string | null

	@Field(() => String, { nullable: false })
	recipeId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => RecipeModel, { nullable: false })
	recipe?: RecipeModel
}
