import { Field, InputType } from '@nestjs/graphql'
import { DeliveryStatus } from 'prisma/generated/prisma/enums'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateDeliveryInput {
	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	name!: string

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	phone!: string

	@Field(() => DeliveryStatus, { defaultValue: 'PREPARING', nullable: false })
	status!: `${DeliveryStatus}`
}
