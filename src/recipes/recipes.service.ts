import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	getAll(
		skip: number = 0,
		take: number = 10,
		sortBy: string = 'createdAt',
		sortOrder: 'asc' | 'desc' = 'desc'
	) {
		return this.prisma.recipe.findMany({
			skip,
			take,
			orderBy: {
				[sortBy]: sortOrder
			},
			include: {
				author: true,
				dishType: true,
				steps: true,
				ingredients: {
					include: {
						ingredient: true
					}
				}
			}
		})
	}

	async getBySlug(slug: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { slug },
			include: {
				author: true,
				dishType: true,
				steps: true,
				ingredients: {
					include: {
						ingredient: true
					}
				}
			}
		})

		if (!recipe) {
			throw new NotFoundException(`Recipe with id ${slug} not found`)
		}

		return recipe
	}

	async getById(id: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { id }
		})

		if (!recipe) {
			throw new NotFoundException(`Recipe with id ${id} not found`)
		}

		return recipe
	}
}
