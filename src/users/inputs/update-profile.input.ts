import { Field, InputType, Int } from '@nestjs/graphql'
import { Gender } from 'prisma/generated/prisma/enums'

@InputType()
export class UpdateProfileInput {
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
}