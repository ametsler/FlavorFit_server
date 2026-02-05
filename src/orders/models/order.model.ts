import { Field, ID, ObjectType } from '@nestjs/graphql'
import { OrderStatus } from 'prisma/generated/prisma/enums'
import { OrderItemModel } from 'src/orders/item/models/item.model'
import { UserModel } from 'src/users/models/user.model'

@ObjectType()
export class OrderModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	orderId!: string

	@Field(() => OrderStatus, { defaultValue: 'PENDING', nullable: false })
	status!: `${OrderStatus}`

	@Field(() => String, { nullable: false })
	userId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => [OrderItemModel], { nullable: true })
	orderItems?: Array<OrderItemModel>

	@Field(() => UserModel, { nullable: false })
	user?: UserModel
}
