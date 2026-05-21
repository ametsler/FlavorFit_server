import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'
import { AdminRecipesService } from 'src/recipes/admin-recipes.service'
import { RecipeModel } from 'src/recipes/models/recipe.model'
import { CreateRecipeInput } from 'src/recipes/inputs/create-recipe'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { RecipeFilterInput } from 'src/recipes/inputs/recipe-filter.input'
import { GetAllRecipesModel } from 'src/recipes/models/get-all-recipes.model'

@Resolver()
export class RecipesResolver {
	constructor(
		private readonly recipesService: RecipesService,
		private readonly adminRecipesService: AdminRecipesService
	) {}

	@Query(() => RecipeModel, { name: 'recipeById' })
	@Auth(Role.ADMIN)
	getRecipeById(@Args('id') id: string) {
		return this.adminRecipesService.getById(id)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	createRecipe(
		@CurrentUser('id') id: string,
		@Args('input') input: CreateRecipeInput
	) {
		return this.adminRecipesService.create(id, input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	updateRecipe(
		@Args('id') id: string,
		@Args('input') input: CreateRecipeInput
	) {
		return this.adminRecipesService.update(id, input)
	}

	@Mutation(() => Boolean)
	@Auth(Role.ADMIN)
	async deleteRecipeById(@Args('id') id: string) {
		try {
			const recipe = await this.adminRecipesService.deleteById(id)
			return !!recipe
		} catch (error) {
			console.warn(error)
			return false
		}
	}

	@Query(() => GetAllRecipesModel, { name: 'recipes' })
	@Auth()
	getRecipes(
		@CurrentUser('id') userId: string,
		@Args('input') input: RecipeFilterInput
	) {
		return this.recipesService.getAll(input, userId)
	}

	@Query(() => RecipeModel, { name: 'recipeBySlug' })
	@Auth()
	getRecipeBySlug(
		@CurrentUser('id') userId: string,
		@Args('slug') slug: string
	) {
		return this.recipesService.getBySlug(slug, userId)
	}
}
