import { Field, InputType } from '@nestjs/graphql'
import { ArrayNotEmpty, ValidateNested } from 'class-validator'
import { OrderItemInput } from 'src/orders/inputs/order-item.input'
import { Type } from 'class-transformer'

@InputType()
export class CreateOrderInput {
	@Field(() => [OrderItemInput], { nullable: false })
	@ArrayNotEmpty()
	@ValidateNested()
	@Type(() => OrderItemInput)
	items!: Array<OrderItemInput>
}
