import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { OrderModel } from 'src/orders/models/order.model'
import { RecipeIngredientModel } from 'src/recipes/models/recipe-ingredient.model'

@ObjectType()
export class OrderItemModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => Int, { defaultValue: 1, nullable: true })
	quantity!: number

	@Field(() => String, { nullable: false })
	recipeIngredientId!: string

	@Field(() => String, { nullable: false })
	orderId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => RecipeIngredientModel, { nullable: false })
	recipeIngredient?: RecipeIngredientModel

	@Field(() => OrderModel, { nullable: false })
	order?: OrderModel
}
