import { ObjectType, Field, ID } from '@nestjs/graphql';
import { RecipeModel } from 'src/recipes/models/recipe.model'

@ObjectType()
export class RecipeTagModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => [RecipeModel], { nullable: true })
	recipes?: Array<RecipeModel>
}
