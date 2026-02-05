import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Gender } from 'prisma/generated/prisma/enums'
import { BodyMeasurementModel } from 'src/users/models/body-measurement.model'
import { UserModel } from 'src/users/models/user.model'

@ObjectType()
export class ProfileModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	fullName!: string

	@Field(() => Gender, { nullable: true })
	gender!: `${Gender}` | null

	@Field(() => Int, { nullable: true })
	age!: number | null

	@Field(() => String, { nullable: true })
	bio!: string | null

	@Field(() => String, { nullable: true })
	photo!: string | null

	@Field(() => String, { nullable: true })
	contact!: string | null

	@Field(() => String, { nullable: false })
	userId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => [BodyMeasurementModel], { nullable: true })
	bodyMeasurements?: Array<BodyMeasurementModel>

	@Field(() => UserModel, { nullable: false })
	user?: UserModel
}
