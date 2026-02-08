import { Field, InputType } from '@nestjs/graphql'
import { Unit } from 'prisma/generated/prisma/enums'
import {
	IsOptional,
	MinLength,
	IsNotEmpty,
	IsPositive
} from 'class-validator'

@InputType()
export class IngredientCreateInput {
	@Field(() => String, { nullable: true })
	iconUrl!: string | null

	@Field(() => String, { nullable: false })
	@MinLength(2, { message: 'Name must be at least 2 characters long' })
	name!: string

	@Field(() => Unit, { nullable: false })
	@IsNotEmpty()
	unit!: `${Unit}`

	@Field(() => Number, { nullable: false })
	@IsPositive()
	@IsOptional()
	price!: number
}
