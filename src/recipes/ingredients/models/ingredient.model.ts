import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Unit } from 'prisma/generated/prisma/enums'

@ObjectType()
export class IngredientModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: true })
	iconUrl!: string | null

	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => Unit, { nullable: false })
	unit!: `${Unit}`

	@Field(() => Number, { nullable: true })
	price!: number | null

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date
}
