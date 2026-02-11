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
			where: { id },
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
			throw new NotFoundException(`Recipe with id ${id} not found`)
		}

		return recipe
	}

	async create(
		authorId: string,
		{ tags, steps, recipeIngredients, ...data }: CreateRecipeInput
	) {
		const recipe = await this.prisma.recipe.create({
			data: {
				...data,
				authorId,
				...(steps && {
					steps: {
						create: steps.map(step => ({ ...step }))
					}
				}),
				...(recipeIngredients && {
					ingredients: {
						create: recipeIngredients.map(ri => ({
							quantity: ri.quantity,
							ingredientId: ri.ingredientId
						}))
					}
				})
			}
		})

		//ToDo refactoring
		if (tags && tags.length > 0) {
      const existingTags = await this.prisma.recipeTag.findMany({
				where: {
					name: {
						in: tags
					}
				},
				select: {
					name: true
				}
			});
			const existingTagNames = existingTags.map(tag => tag.name);
			const newTagNames = tags.filter(tag => !existingTagNames.includes(tag));

			if (newTagNames.length > 0) {
				await this.prisma.recipeTag.createMany({
					data: newTagNames.map(name => ({ name }))
				});
			}

			const tagsSaved = await this.prisma.recipeTag.findMany({
				where: {
					name: {
						in: tags
					}
				}
			})
			await this.prisma.recipeToRecipeTag.createMany({
				data: tagsSaved.map(tag => ({
					recipeId: recipe.id,
					recipeTagId: tag.id
				}))
			})
		}

		return this.getById(recipe.id)
	}

	update(
		id: string,
		{ tags, steps, recipeIngredients, ...data }: CreateRecipeInput
	) {
		return this.prisma.recipe.update({
			where: { id },
			data: {
				...data,
				...(steps && {
					steps: {
						create: steps.map(step => ({ ...step }))
					}
				}),
				...(recipeIngredients && {
					ingredients: {
						create: recipeIngredients.map(ri => ({
							quantity: ri.quantity,
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
