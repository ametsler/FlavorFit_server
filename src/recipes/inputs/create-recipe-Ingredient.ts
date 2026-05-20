import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator'
import { Unit } from 'prisma/generated/prisma/enums'

@InputType()
export class CreateRecipeIngredientInput {
	@Field(() => Unit, { nullable: false })
	@IsNotEmpty()
	unit!: `${Unit}`

	@Field(() => Number, { nullable: true })
	@IsPositive()
	quantity!: number | null

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsNotEmpty()
	recipeId!: string | null

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	ingredientId!: string
}
