import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql'
import { Difficulty } from 'prisma/generated/prisma/enums'
import { DishModel } from 'src/recipes/dish/models/dish.model'
import { RecipeStepModel } from 'src/recipes/step/models/step.model'
import { UserModel } from 'src/users/models/user.model'
import { RecipeTagModel } from 'src/recipes/tag/models/recipe-tag.model'
import { CommentModel } from 'src/comments/models/comment.model'
import { RecipeIngredientModel } from 'src/recipes/models/recipe-ingredient.model'

@ObjectType()
export class RecipeModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => String, { nullable: false })
	description!: string

	@Field(() => String, { nullable: true })
	image!: string | null

	@Field(() => String, { nullable: false })
	slug!: string

	@Field(() => String, { nullable: true })
	cuisineType!: string | null

	@Field(() => Difficulty, { nullable: false })
	difficulty!: `${Difficulty}`

	@Field(() => Int, { nullable: true })
	prepTime!: number | null

	@Field(() => Int, { nullable: false })
	cookTime!: number

	@Field(() => Int, { nullable: true })
	calories!: number | null

	@Field(() => Int, { nullable: true })
	protein!: number | null

	@Field(() => Int, { nullable: true })
	fats!: number | null

	@Field(() => Int, { nullable: true })
	carbohydrates!: number | null

	@Field(() => Int, { nullable: true })
	fiber!: number | null

	@Field(() => Float, { nullable: true })
	rating!: number | null

	@Field(() => String, { nullable: true })
	sourceUrl!: string | null

	@Field(() => Int, { nullable: true })
	yield!: number | null

	@Field(() => String, { nullable: true })
	authorName!: string | null

	@Field(() => String, { nullable: false })
	authorId!: string

	@Field(() => String, { nullable: true })
	dishTypeId!: string | null

	@Field(() => Int, { defaultValue: 0 })
	likes!: number

	@Field(() => Int, { defaultValue: 0 })
	views!: number

	@Field(() => Boolean, { defaultValue: false })
	hasLike!: boolean

	@Field(() => Boolean, { nullable: false })
	active!: boolean

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => [RecipeIngredientModel], { nullable: true })
	ingredients?: Array<RecipeIngredientModel>

	@Field(() => [RecipeStepModel], { nullable: true })
	steps?: Array<RecipeStepModel>

	@Field(() => [CommentModel], { nullable: true })
	comments?: Array<CommentModel>

	@Field(() => [RecipeTagModel], { nullable: true })
	tags?: Array<RecipeTagModel>

	@Field(() => UserModel, { nullable: false })
	author?: UserModel

	@Field(() => DishModel, { nullable: true })
	dishType?: DishModel | null
}
