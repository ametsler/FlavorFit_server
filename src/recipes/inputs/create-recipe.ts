import { Field, Float, InputType, Int } from '@nestjs/graphql'
import { Difficulty } from 'prisma/generated/prisma/enums'
import {
	ArrayNotEmpty,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsPositive,
	ValidateNested
} from 'class-validator'
import { CreateStepInput } from 'src/recipes/step/inputs/create-step.input'
import { CreateRecipeIngredientInput } from 'src/recipes/inputs/create-recipe-Ingredient'
import { Type } from 'class-transformer'

@InputType()
export class CreateRecipeInput {
	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	title!: string

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	description!: string

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	slug!: string

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	cuisineType!: string

	@Field(() => Difficulty, { nullable: false })
	@IsEnum(Difficulty)
	difficulty!: `${Difficulty}`

	@Field(() => Int, { nullable: false })
	@IsOptional()
	prepTime!: number

	@Field(() => Int, { nullable: false })
	@IsPositive()
	cookTime!: number

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	calories!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	protein!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	fats!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	carbohydrates!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	fiber!: number | null

	@Field(() => Float, { nullable: true })
	@IsPositive()
	@IsOptional()
	rating!: number | null

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	dishTypeId!: string

	@Field(() => [String], { nullable: true })
	@ArrayNotEmpty()
	tags?: string[]

	@Field(() => [CreateStepInput], { nullable: true })
	@ArrayNotEmpty()
	@ValidateNested()
	@Type(() => CreateStepInput)
	steps?: Array<CreateStepInput>

	@Field(() => [CreateRecipeIngredientInput], { nullable: true })
	@ArrayNotEmpty()
	@ValidateNested()
	@Type(() => CreateRecipeIngredientInput)
	recipeIngredients?: Array<CreateRecipeIngredientInput>
}
