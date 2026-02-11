import { Field, InputType, Int } from '@nestjs/graphql'
import {
	ActivityLevel,
	NutritionGoal
} from 'prisma/generated/prisma/enums'
import { IsEnum, IsOptional, IsPositive } from 'class-validator'

@InputType()
export class UpdateBodyMeasurementInput {
	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	height!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	weight!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	chest!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	waist!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	thigh!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	arm!: number | null

	@Field(() => Int, { nullable: true })
	@IsPositive()
	@IsOptional()
	goalWeight!: number | null

	@Field(() => ActivityLevel, { nullable: true })
	@IsOptional()
	@IsEnum(ActivityLevel)
	activityLevel!: `${ActivityLevel}` | null

	@Field(() => NutritionGoal, { nullable: true })
	@IsOptional()
	@IsEnum(NutritionGoal)
	nutritionGoal!: `${NutritionGoal}` | null
}
