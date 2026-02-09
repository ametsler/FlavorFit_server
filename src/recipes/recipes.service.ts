import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { RecipeFilterInput } from 'src/recipes/inputs/recipe-filter.input'
import type * as Prisma from 'prisma/generated/prisma/internal/prismaNamespace'

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	getAll(filter?: RecipeFilterInput) {
		const whereConditions: Prisma.RecipeWhereInput = {}

		if (filter?.category) {
			whereConditions.dishType = {
				title: { contains: filter.category, mode: 'insensitive' }
			}
		}

		if (filter?.searchTerm) {
			whereConditions.OR = [
				{ title: { contains: filter.searchTerm, mode: 'insensitive' } },
				{ description: { contains: filter.searchTerm, mode: 'insensitive' } },
				{
					ingredients: {
						some: {
							ingredient: {
								name: { contains: filter.searchTerm, mode: 'insensitive' }
							}
						}
					}
				}
			]
		}

		let orderBy:
			| Prisma.RecipeOrderByWithRelationInput
			| Prisma.RecipeOrderByWithRelationInput[] = { createdAt: 'desc' }
		if (filter?.sortBy) {
			switch (filter.sortBy) {
				case 'date':
					orderBy = { createdAt: filter.sortOrder }
					break
				case 'recommended':
					orderBy = { likes: { _count: filter.sortOrder } }
					break
				case 'popularity':
					orderBy = { views: { _count: filter.sortOrder } }
					break
			}
		}

		return this.prisma.recipe.findMany({
			skip: filter?.skip || 0,
			take: filter?.take || 10,
			where: whereConditions,
			orderBy,
			include: {
				author: true,
				dishType: true,
				steps: true,
				ingredients: {
					include: {
						ingredient: true
					}
				},
				likes: true,
				views: true
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
}
