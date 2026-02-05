import { Field, InputType } from '@nestjs/graphql'
import { OrderStatus } from 'prisma/generated/prisma/enums'

@InputType()
export class CreateOrderInput {
	@Field(() => String, { nullable: false })
	orderId!: string

	@Field(() => OrderStatus, { defaultValue: 'PENDING', nullable: false })
	status!: `${OrderStatus}`

	@Field(() => String, { nullable: false })
	userId!: string
}
