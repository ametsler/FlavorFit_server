import { CreateScheduleInput } from './create-schedule.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { IsOptional, IsPositive, Max, Min } from 'class-validator'

@InputType()
export class UpdateScheduleInput extends PartialType(CreateScheduleInput) {
	@Field(() => Date, { nullable: true })
	@IsOptional()
	start!: Date | undefined

	@Field(() => Date, { nullable: true })
	@IsOptional()
	end!: Date | undefined

	@Field(() => Boolean, { nullable: false })
	complete!: boolean

	@Field(() => Number, { nullable: true })
	@IsPositive()
	@IsOptional()
	reminder!: number | null

	@Field(() => Number, { nullable: true })
	@Min(1)
	@Max(10)
	@IsOptional()
	rate!: number | null
}
