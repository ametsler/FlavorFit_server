import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateRecipeInput } from 'src/recipes/inputs/create-recipe'

@Injectable()
export class AdminRecipesService {
	constructor(private readonly prisma: PrismaService) {}

	getAll() {
		return this.prisma.recipe.findMany({
			include: {
				author: true,
				dishType: true,
				steps: true,
				tags: true,
				ingredients: {
					include: {
						ingredient: true
					}
				}
			}
		})
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

	create(
		authorId: string,
		{ tags, steps, recipeIngredients, ...data }: CreateRecipeInput
	) {
		return this.prisma.recipe.create({
			data: {
				...data,
				authorId,
				// ...(tags && {
				// 	tags: {
				// 		createOrConnect: tags?.map(tag => ({ name: tag }))
				// 	}
				// }),
				...(steps && {
					steps: {
						create: steps?.map(step => ({ ...step }))
					}
				}),
				...(recipeIngredients && {
					ingredients: {
						create: recipeIngredients.map(ri => ({
							quantity: ri.quantity,
							// recipeId: ri.recipeId,
							ingredientId: ri.ingredientId
						}))
					}
				})
			}
		})
	}

	update(
		id: string,
		{ tags, steps, recipeIngredients, ...data }: CreateRecipeInput
	) {
		return this.prisma.recipe.update({
			where: { id },
			data: {
				...data,
				// ...(tags && {
				// 	tags: {
				// 		createOrConnect: tags?.map(tag => ({ name: tag }))
				// 	}
				// }),
				...(steps && {
					steps: {
						create: steps?.map(step => ({ ...step }))
					}
				}),
				...(recipeIngredients && {
					ingredients: {
						create: recipeIngredients.map(ri => ({
							quantity: ri.quantity,
							// recipeId: ri.recipeId,
							ingredientId: ri.ingredientId
						}))
					}
				})
			}
		})
	}

	deleteById(id: string) {
		return this.prisma.recipe.delete({
			where: { id }
		})
	}
}
