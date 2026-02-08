import { Field, InputType } from '@nestjs/graphql'
import { ArrayNotEmpty, ValidateNested } from 'class-validator'
import { CreateItemInput } from 'src/orders/inputs/create-item.input'
import { Type } from 'class-transformer'

@InputType()
export class CreateOrderInput {
	@Field(() => [CreateItemInput], { nullable: false })
	@ArrayNotEmpty()
	@ValidateNested()
	@Type(() => CreateItemInput)
	items!: Array<CreateItemInput>
}
