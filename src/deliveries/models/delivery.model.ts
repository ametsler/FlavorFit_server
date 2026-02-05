import { Field, ID, ObjectType } from '@nestjs/graphql'
import { DeliveryStatus } from 'prisma/generated/prisma/enums'

@ObjectType()
export class DeliveryModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => String, { nullable: false })
	phone!: string

	@Field(() => DeliveryStatus, { defaultValue: 'PREPARING', nullable: false })
	status!: `${DeliveryStatus}`

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date
}
