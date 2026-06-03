import { Field, ObjectType } from '@nestjs/graphql'
import { ScheduleItem } from 'src/users/schedule/models/schedule-item.model'

@ObjectType()
export class ScheduleForWeek {
	@Field(() => Date, { nullable: false })
	date!: Date

	@Field(() => [ScheduleItem], { nullable: false })
	items!: ScheduleItem[]
}
