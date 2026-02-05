import { Field, InputType, Int } from '@nestjs/graphql'
import { ActivityLevel, NutritionGoal } from 'prisma/generated/prisma/enums'

@InputType()
export class UpdateBodyMeasurementInput {
	@Field(() => Int, { nullable: true })
	height!: number | null

	@Field(() => Int, { nullable: true })
	weight!: number | null

	@Field(() => Int, { nullable: true })
	chest!: number | null

	@Field(() => Int, { nullable: true })
	waist!: number | null

	@Field(() => Int, { nullable: true })
	thigh!: number | null

	@Field(() => Int, { nullable: true })
	arm!: number | null

	@Field(() => Int, { nullable: true })
	goalWeight!: number | null

	@Field(() => ActivityLevel, { nullable: true })
	activityLevel!: `${ActivityLevel}` | null

	@Field(() => NutritionGoal, { nullable: true })
	nutritionGoal!: `${NutritionGoal}` | null
}