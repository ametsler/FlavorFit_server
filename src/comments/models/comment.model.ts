import { Field, ID, ObjectType } from '@nestjs/graphql'
import { RecipeModel } from 'src/recipes/models/recipe.model'
import { CommentLikeModel } from 'src/comments/like/models/like.model'
import { UserModel } from 'src/users/models/user.model'

@ObjectType()
export class CommentModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	content!: string

	@Field(() => String, { nullable: false })
	recipeId!: string

	@Field(() => String, { nullable: false })
	authorId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => [CommentLikeModel], { nullable: true })
	likes?: Array<CommentLikeModel>

	@Field(() => RecipeModel, { nullable: false })
	recipe?: RecipeModel

	@Field(() => UserModel, { nullable: false })
	author?: UserModel
}
