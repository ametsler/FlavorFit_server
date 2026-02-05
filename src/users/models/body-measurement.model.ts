import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ActivityLevel, NutritionGoal } from 'prisma/generated/prisma/enums'
import { ProfileModel } from 'src/users/models/profile.model'
import { UserModel } from 'src/users/models/user.model'

@ObjectType()
export class BodyMeasurementModel {
	@Field(() => ID, { nullable: false })
	id!: string

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

	@Field(() => String, { nullable: false })
	userId!: string

	@Field(() => String, { nullable: true })
	profileId!: string | null

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => UserModel, { nullable: false })
	user?: UserModel

	@Field(() => ProfileModel, { nullable: true })
	profile?: ProfileModel | null
}
