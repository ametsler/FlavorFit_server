import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsPositive, MinLength } from 'class-validator'

@InputType()
export class IngredientCreateInput {
	@Field(() => String, { nullable: true })
	image!: string | null

	@Field(() => String, { nullable: false })
	@MinLength(2, { message: 'Name must be at least 2 characters long' })
	name!: string

	@Field(() => Number, { nullable: false })
	@IsPositive()
	@IsOptional()
	price!: number
}
