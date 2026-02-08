import { Injectable } from '@nestjs/common'
import { CreateOrderInput } from './inputs/create-order.input'
import { PrismaService } from 'src/prisma/prisma.service'
import { OrderStatus } from 'prisma/generated/prisma/enums'

@Injectable()
export class OrdersService {
	constructor(private readonly prisma: PrismaService) {}
	async create(userId: string, data: CreateOrderInput) {
		if (data.items.length === 0) {
			throw new Error('Order must have at least one item')
		}

		const number = Math.random().toString(36).substring(8).toUpperCase()

		const recipeIngredientIds = data.items.map(item => item.recipeIngredientId)
		const recipeIngredients = await this.prisma.recipeIngredient.findMany({
			where: {
				id: {
					in: recipeIngredientIds
				}
			},
			include: {
				ingredient: true
			}
		})

		const ingredientsMap = new Map(recipeIngredients.map(ri => [ri.id, ri]))
		let totalAmount = 0
		const items = data.items.map(item => {
			const recipeIngredient = ingredientsMap.get(item.recipeIngredientId)
			if (!recipeIngredient) {
				throw new Error('Invalid recipe ingredient id')
			}
			if (!recipeIngredient.ingredient) {
				throw new Error(`Invalid ingredient for recipe ingredient id ${item.recipeIngredientId}`)
			}
			if (!recipeIngredient.ingredient.price) {
				throw new Error(
					`Ingredient ${recipeIngredient.ingredient.name} has no price`
				)
			}
			totalAmount += Number(recipeIngredient.ingredient.price) * item.quantity
			return {
				recipeIngredientId: item.recipeIngredientId,
				quantity: item.quantity
			}
		})

		return this.prisma.order.create({
			data: {
				items: {
					createMany: {
						data: items
					}
				},
				status: OrderStatus.PENDING,
				userId,
				number,
				amount: totalAmount
			},
			include: {
				items: {
					include: {
						recipeIngredient: {
							include: {
								ingredient: true,
								recipe: true
							}
						}
					}
				}
			}
		})
	}

	findAll(userId: string) {
		return this.prisma.order.findMany({
			where: {
				userId
			},
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				items: {
					include: {
						recipeIngredient: {
							include: {
								ingredient: true,
								recipe: true
							}
						}
					}
				}
			}
		})
	}

	findOne(userId: string, id: string) {
		return this.prisma.order.findUnique({
			where: {
				userId,
				id
			}
		})
	}

	remove(userId: string, id: string) {
		return this.prisma.order.delete({
			where: {
				userId,
				id,
				status: OrderStatus.PENDING
			}
		})
	}
}
