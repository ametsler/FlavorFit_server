import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { RecipeModel } from 'src/recipes/models/recipe.model'

@ObjectType()
export class DishModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => Int, { nullable: false })
	order!: number

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => [RecipeModel], { nullable: true })
	recipes?: Array<RecipeModel>
}
