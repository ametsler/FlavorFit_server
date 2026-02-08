import { Field, InputType, Int } from '@nestjs/graphql'
import { IsPositive } from 'class-validator'

@InputType()
export class CreateItemInput {
	@Field(() => Int, { defaultValue: 1, nullable: false })
	@IsPositive()
	quantity!: number

	@Field(() => String, { nullable: false })
	@IsPositive()
	recipeIngredientId!: string
}
