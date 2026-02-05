import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { OrderModel } from 'src/orders/models/order.model'
import { IngredientModel } from 'src/recipes/ingredients/models/ingredient.model'

@ObjectType()
export class OrderItemModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => Int, { defaultValue: 1, nullable: true })
	quantity!: number | null

	@Field(() => String, { nullable: false })
	recipeIngredientId!: string

	@Field(() => String, { nullable: false })
	orderId!: string

	@Field(() => String, { nullable: true })
	ingredientId!: string | null

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => IngredientModel, { nullable: false })
	ingredient?: IngredientModel | null

	@Field(() => OrderModel, { nullable: false })
	order?: OrderModel
}
