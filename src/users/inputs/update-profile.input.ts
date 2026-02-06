import { Field, InputType, Int } from '@nestjs/graphql'
import { Gender } from 'prisma/generated/prisma/enums'
import {
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsPositive,
	IsUrl
} from 'class-validator'

@InputType()
export class UpdateProfileInput {
	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	fullName!: string

	@Field(() => Gender, { nullable: true })
	@IsOptional()
	@IsEnum(Gender)
	gender!: `${Gender}` | null

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsPositive()
	age!: number | null

	@Field(() => String, { nullable: true })
	@IsOptional()
	bio!: string | null

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsUrl()
	photo!: string | null

	@Field(() => String, { nullable: true })
	@IsOptional()
	contact!: string | null
}