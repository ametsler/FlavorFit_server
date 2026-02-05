import { Field, InputType } from '@nestjs/graphql'
import { Unit } from 'prisma/generated/prisma/enums'

@InputType()
export class IngredientCreateInput {
	@Field(() => String, { nullable: false })
	iconUrl!: string

	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => Unit, { nullable: false })
	unit!: `${Unit}`

	@Field(() => String, { nullable: false })
	price!: number
}
