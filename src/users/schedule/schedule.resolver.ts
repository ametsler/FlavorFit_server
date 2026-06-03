import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';
import { CreateScheduleInput } from './inputs/create-schedule.input';
import { UpdateScheduleInput } from './inputs/update-schedule.input';
import { Schedule } from 'src/users/schedule/models/schedule.model'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ScheduleForWeek } from 'src/users/schedule/models/schedule-for-week.model'
import { GetScheduleInput } from 'src/users/schedule/inputs/get-schedule.input'
import { ScheduleItem } from 'src/users/schedule/models/schedule-item.model'

@Resolver(() => Schedule)
export class ScheduleResolver {
	constructor(private readonly scheduleService: ScheduleService) {}

	@Mutation(() => Schedule)
	@Auth()
	createUserSchedule(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateScheduleInput
	) {
		return this.scheduleService.create(input, userId)
	}

	@Query(() => [ScheduleForWeek], { name: 'userScheduleForWeek' })
	@Auth()
	findForWeek(
		@CurrentUser('id') userId: string,
		@Args('input') input: GetScheduleInput
	) {
		return this.scheduleService.findForWeek(input, userId)
	}

	@Query(() => [ScheduleItem], { name: 'userSchedule' })
	@Auth()
	userSchedule(
		@CurrentUser('id') userId: string,
		@Args('input') input: GetScheduleInput
	) {
		return this.scheduleService.userSchedule(input, userId)
	}

	@Mutation(() => Schedule)
	updateUserSchedule(
		@Args('id') id: string,
		@Args('data') input: UpdateScheduleInput
	) {
		return this.scheduleService.update(id, input)
	}
}
