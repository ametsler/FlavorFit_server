import { Field, InputType } from '@nestjs/graphql'
import { UpdateProfileInput } from 'src/users/inputs/update-profile.input'
import { UpdateBodyMeasurementInput } from 'src/users/inputs/update-body-measurement.input'
import { Role } from 'prisma/generated/prisma/enums'

@InputType()
export class UpdateUserInput {
	@Field(() => String, { nullable: true })
	email!: string

	@Field(() => String, { nullable: true })
	password!: string

	@Field(() => Role, { defaultValue: 'USER', nullable: true })
	role!: `${Role}`

	@Field(() => UpdateProfileInput, { nullable: true })
	profile?: UpdateProfileInput | null

	@Field(() => UpdateBodyMeasurementInput, { nullable: true })
	bodyMeasurement?: UpdateBodyMeasurementInput | null
}