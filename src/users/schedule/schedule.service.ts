import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateScheduleInput } from './inputs/create-schedule.input';
import { UpdateScheduleInput } from './inputs/update-schedule.input';
import { PrismaService } from 'src/prisma/prisma.service'
import { UserScheduleUncheckedCreateInput } from 'prisma/generated/prisma/models/UserSchedule'
import { ScheduleItem } from 'src/users/schedule/models/schedule-item.model'
import { GetScheduleInput } from 'src/users/schedule/inputs/get-schedule.input'

@Injectable()
export class ScheduleService {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: CreateScheduleInput, userId: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { id: data.recipeId }
		})
		if (!recipe) {
			throw new NotFoundException(`Recipe with id ${data.recipeId} not found`)
		}

		if (!data.start && !data.end) {
			throw new NotFoundException(
				`Period is missing. Recipe with id ${data.recipeId}`
			)
		}

		const duration = ((recipe.prepTime || 0) + recipe.cookTime) * 60000

		const start =
			data.start ||
			(data.end && new Date(new Date(data.end).getTime() - duration))
		const end =
			data.end ||
			(data.start && new Date(new Date(data.start).getTime() + duration))

		if (!end || !start || end.getTime() < start.getTime()) {
			throw new NotFoundException(
				`Period is incorrect. Recipe with id ${data.recipeId}`
			)
		}

		const schedule = {
			start,
			end,
			complete: data.complete || false,
			reminder: data.reminder,
			rate: data.rate,
			recipeId: data.recipeId,
			userId
		} as UserScheduleUncheckedCreateInput

		return this.prisma.userSchedule.create({
			data: schedule,
			include: {
				recipe: true
			}
		})
	}

	async findForWeek(data: GetScheduleInput, userId: string) {
		// Получаем начало и конец недели (понедельник - воскресенье)
		const startOfWeek = new Date(data.date)
		// Вычисляем понедельник: если воскресенье (0), считаем как 7
		const dayOfWeek = startOfWeek.getDay() || 7
		startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek + 1) // Понедельник
		startOfWeek.setHours(0, 0, 0, 0)

		const endOfWeek = new Date(startOfWeek)
		endOfWeek.setDate(startOfWeek.getDate() + 7) // Следующий понедельник (exclusive)

		const items = await this.prisma.userSchedule.findMany({
			where: {
				userId,
				start: {
					gte: startOfWeek,
					lt: endOfWeek
				}
			},
			include: {
				recipe: {
					include: {
						dishType: true
					}
				}
			}
		})

		// Группируем по дням
		const scheduleMap = new Map<string, { date: Date; items: ScheduleItem[] }>()

		items.forEach(item => {
			const dayDate = new Date(item.start)
			dayDate.setHours(0, 0, 0, 0)
			const dayKey = dayDate.toISOString().split('T')[0]

			if (!scheduleMap.has(dayKey)) {
				scheduleMap.set(dayKey, {
					date: dayDate,
					items: []
				})
			}

			const scheduleItem: ScheduleItem = {
				start: item.start,
				end: item.end,
				complete: item.complete,
				title: item.recipe.title || '',
				calories: item.recipe.calories || null,
				cuisineType: item.recipe.cuisineType || null,
				dishType: item.recipe.dishType?.title || null
			}

			scheduleMap.get(dayKey)!.items.push(scheduleItem)
		})

		// Преобразуем Map в массив и сортируем по дате
		return Array.from(scheduleMap.values()).sort(
			(a, b) => a.date.getTime() - b.date.getTime()
		)
	}

	async userSchedule(data: GetScheduleInput, userId: string) {
		const startOfDay = new Date(data.date)
		startOfDay.setHours(0, 0, 0, 0)

		const endOfDay = new Date(startOfDay)
		endOfDay.setDate(startOfDay.getDate() + 1)

		const items = await this.prisma.userSchedule.findMany({
			where: {
				userId,
				start: {
					gte: startOfDay,
					lt: endOfDay
				}
			},
			include: {
				recipe: {
					include: {
						dishType: true
					}
				}
			}
		})

		return items.map(item => {
			const scheduleItem: ScheduleItem = {
				start: item.start,
				end: item.end,
				complete: item.complete,
				title: item.recipe.title || '',
				calories: item.recipe.calories || null,
				cuisineType: item.recipe.cuisineType || null,
				dishType: item.recipe.dishType?.title || null
			}
			return scheduleItem
		})
	}

	async update(id: string, update: UpdateScheduleInput) {
		await this.prisma.userSchedule.update({
			where: {
				id
			},
			data: { ...update }
		})
	}
}
