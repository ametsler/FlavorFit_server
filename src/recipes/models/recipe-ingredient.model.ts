import { Field, ID, ObjectType } from '@nestjs/graphql'
import { RecipeModel } from '../models/recipe.model'
import { IngredientModel } from '../ingredients/models/ingredient.model'
import { OrderItemModel } from 'src/orders/models/item.model'
import { Unit } from 'prisma/generated/prisma/enums'

@ObjectType()
export class RecipeIngredientModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => Unit, { nullable: false })
	unit!: `${Unit}`

	@Field(() => Number, { nullable: true })
	quantity!: number | null

	@Field(() => String, { nullable: false })
	recipeId!: string

	@Field(() => String, { nullable: false })
	ingredientId!: string

	@Field(() => [OrderItemModel], { nullable: true })
	OrderItem?: Array<OrderItemModel>

	@Field(() => RecipeModel, { nullable: false })
	recipe?: RecipeModel

	@Field(() => IngredientModel, { nullable: false })
	ingredient?: IngredientModel

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date
}
