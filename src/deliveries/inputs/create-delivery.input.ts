import { Field, InputType } from '@nestjs/graphql'
import { DeliveryStatus } from 'prisma/generated/prisma/enums'

@InputType()
export class CreateDeliveryInput {
	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => String, { nullable: false })
	phone!: string

	@Field(() => DeliveryStatus, { defaultValue: 'PREPARING', nullable: false })
	status!: `${DeliveryStatus}`
}
