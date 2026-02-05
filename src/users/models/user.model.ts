import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Role } from 'prisma/generated/prisma/enums'
import { OrderModel } from 'src/orders/models/order.model'
import { ProfileModel } from 'src/users/models/profile.model'
import { BodyMeasurementModel } from 'src/users/models/body-measurement.model'
import { RecipeModel } from 'src/recipes/models/recipe.model'
import { RecipeLikeModel } from 'src/recipes/like/models/recipe-like.model'
import { RecipeViewModel } from 'src/recipes/view/models/view.model'
import { CommentLikeModel } from 'src/comments/like/models/like.model'
import { CommentModel } from 'src/comments/models/comment.model'

@ObjectType()
export class UserModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	email!: string

	@Field(() => Role, { defaultValue: 'USER', nullable: false })
	role!: `${Role}`

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => ProfileModel, { nullable: true })
	profile?: ProfileModel | null

	@Field(() => BodyMeasurementModel, { nullable: true })
	bodyMeasurement?: BodyMeasurementModel | null

	@Field(() => [RecipeModel], { nullable: true })
	recipe?: Array<RecipeModel>

	@Field(() => [RecipeLikeModel], { nullable: true })
	recipeLike?: Array<RecipeLikeModel>

	@Field(() => [RecipeViewModel], { nullable: true })
	recipeView?: Array<RecipeViewModel>

	@Field(() => [CommentModel], { nullable: true })
	comment?: Array<CommentModel>

	@Field(() => [CommentLikeModel], { nullable: true })
	commentLike?: Array<CommentLikeModel>

	@Field(() => [OrderModel], { nullable: true })
	order?: Array<OrderModel>
}
