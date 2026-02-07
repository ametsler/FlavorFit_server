import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'
import { AdminRecipesService } from 'src/recipes/admin-recipes.service'
import { RecipeModel } from 'src/recipes/models/recipe.model'
import { CreateRecipeInput } from 'src/recipes/inputs/create-recipe'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'

@Resolver()
export class RecipesResolver {
	constructor(
		private readonly recipesService: RecipesService,
		private readonly adminRecipesService: AdminRecipesService
	) {}

	@Query(() => [RecipeModel], { name: 'recipes' })
	@Auth(Role.ADMIN)
	getRecipes() {
		return this.adminRecipesService.getAll()
	}

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
			return false
		}
	}

	@Query(() => [RecipeModel], { name: 'recipesPageable' })
	@Auth()
	getRecipesPageable(
		@Args('skip') skip: number,
		@Args('take') take: number
	) {
		return this.recipesService.getAll(skip, take)
	}

	@Query(() => RecipeModel, { name: 'recipeBySlug' })
	@Auth()
	getRecipeBySlug(@Args('slug') slug: string) {
		return this.recipesService.getBySlug(slug)
	}
}
