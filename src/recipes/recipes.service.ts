import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { RecipeFilterInput } from 'src/recipes/inputs/recipe-filter.input'
import type * as Prisma from 'prisma/generated/prisma/internal/prismaNamespace'
import { Sorting } from 'src/recipes/recipe.enum'
import { RecipeLikeModel } from 'src/recipes/like/models/recipe-like.model'

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll(
		{ searchTerm, category, sortOrder, sortBy, limit, page }: RecipeFilterInput,
		userId: string
	) {
		const whereConditions: Prisma.RecipeWhereInput = {}
		whereConditions.active = true

		if (category) {
			whereConditions.dishType = {
				title: { contains: category, mode: 'insensitive' }
			}
		}

		if (searchTerm) {
			whereConditions.OR = [
				{ title: { contains: searchTerm, mode: 'insensitive' } },
				{ description: { contains: searchTerm, mode: 'insensitive' } },
				{
					ingredients: {
						some: {
							ingredient: {
								name: { contains: searchTerm, mode: 'insensitive' }
							}
						}
					}
				}
			]
		}

		let orderBy:
			| Prisma.RecipeOrderByWithRelationInput
			| Prisma.RecipeOrderByWithRelationInput[] = { createdAt: 'desc' }
		if (sortBy) {
			switch (sortBy) {
				case Sorting.DATE:
					orderBy = { createdAt: sortOrder }
					break
				case Sorting.RECOMMENDED:
					orderBy = { likes: { _count: sortOrder } }
					break
				case Sorting.POPULARITY:
					orderBy = { views: { _count: sortOrder } }
					break
			}
		}

		const skip = (page - 1) * limit

		const [items, total] = await Promise.all([
			this.prisma.recipe.findMany({
				skip,
				take: limit,
				where: whereConditions,
				orderBy,
				include: {
					_count: {
						select: {
							likes: true,
							views: true
						}
					}
				}
			}),
			this.prisma.recipe.count({ where: whereConditions })
		])
		if (items.length == 0) {
			return {
				items,
				total,
				hasMore: false
			}
		}

		let myLikes: RecipeLikeModel[]
		if (userId) {
			const recipeIds = items.map(item => item.id)

			myLikes = await this.prisma.recipeLike.findMany({
				where: {
					recipeId: {
						in: recipeIds
					},
					userId
				}
			})
		}

		const updatedItems = items.map(item => ({
			...item,
			likes: item._count.likes,
			views: item._count.views,
			hasLike: myLikes ? !!myLikes.find(l => l.recipeId === item.id) : false
		}))
		return {
			items: updatedItems,
			total,
			hasMore: skip + items.length < total
		}
	}

	async getBySlug(slug: string, userId: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { slug },
			include: {
				author: {
					include: {
						profile: true
					}
				},
				tags: true,
				dishType: true,
				steps: true,
				comments: {
					include: {
						author: {
							include: {
								profile: true
							}
						}
					}
				},
				ingredients: {
					include: {
						ingredient: true
					}
				},
				_count: {
					select: {
						likes: true,
						views: true
					}
				}
			}
		})

		if (!recipe) {
			throw new NotFoundException(`Recipe with id ${slug} not found`)
		}

		const myLikes = await this.prisma.recipeLike.findFirst({
			where: {
				recipeId: recipe.id,
				userId
			}
		})

		return {
			...recipe,
			likes: recipe._count.likes,
			views: recipe._count.views,
			hasLike: !!myLikes
		}
	}
}
