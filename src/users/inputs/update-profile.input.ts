import { Field, InputType, Int } from '@nestjs/graphql'
import { Gender } from 'prisma/generated/prisma/enums'
import {
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsPositive
} from 'class-validator'

@InputType()
export class UpdateProfileInput {
	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsNotEmpty()
	fullName!: string | null

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
	@IsNotEmpty()
	photo!: string | null

	@Field(() => String, { nullable: true })
	@IsOptional()
	contact!: string | null
}
