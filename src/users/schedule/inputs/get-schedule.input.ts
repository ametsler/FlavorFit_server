import { Field, InputType } from '@nestjs/graphql'
import { IsDate } from 'class-validator'

@InputType()
export class GetScheduleInput {
	@Field(() => Date, { nullable: false })
	@IsDate()
	date!: Date
}
