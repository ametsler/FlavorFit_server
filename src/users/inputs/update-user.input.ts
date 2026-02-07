import { Field, InputType } from '@nestjs/graphql'
import { UpdateProfileInput } from 'src/users/inputs/update-profile.input'
import { UpdateBodyMeasurementInput } from 'src/users/inputs/update-body-measurement.input'
import { Gender, Role } from 'prisma/generated/prisma/enums'
import { IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

@InputType()
export class UpdateUserInput {
	@Field(() => String, { nullable: true })
	@IsOptional()
	email!: string

	@Field(() => String, { nullable: true })
	@IsOptional()
	password!: string

	@Field(() => Role, { defaultValue: 'USER', nullable: true })
	@IsOptional()
	@IsEnum(Role)
	role!: `${Role}`

	@Field(() => UpdateProfileInput, { nullable: true })
	@IsOptional()
	@ValidateNested()
	@Type(() => UpdateProfileInput)
	profile?: UpdateProfileInput | null

	@Field(() => UpdateBodyMeasurementInput, { nullable: true })
	@IsOptional()
	@ValidateNested()
	@Type(() => UpdateBodyMeasurementInput)
	bodyMeasurement?: UpdateBodyMeasurementInput | null
}