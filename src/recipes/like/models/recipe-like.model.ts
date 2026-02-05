import { ObjectType, Field, ID } from '@nestjs/graphql';
import { RecipeModel } from 'src/recipes/models/recipe.model'
import { UserModel } from 'src/users/models/user.model'

@ObjectType()
export class RecipeLikeModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	recipeId!: string

	@Field(() => String, { nullable: false })
	userId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => RecipeModel, { nullable: false })
	recipe?: RecipeModel

	@Field(() => UserModel, { nullable: false })
	user?: UserModel
}
