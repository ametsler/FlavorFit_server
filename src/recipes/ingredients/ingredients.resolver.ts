import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { IngredientsService } from './ingredients.service'
import { IngredientCreateInput } from './inputs/create-ingredient'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { IngredientModel } from './models/ingredient.model'
import { Role } from 'prisma/generated/prisma/enums'

@Resolver()
export class IngredientsResolver {
	constructor(private readonly ingredientsService: IngredientsService) {}

	@Query(() => [IngredientModel], { name: 'ingredients' })
	@Auth(Role.ADMIN)
	getAll() {
		return this.ingredientsService.getAll()
	}

	@Query(() => IngredientModel, { name: 'ingredientById' })
	@Auth(Role.ADMIN)
	getById(@Args('id') id: string) {
		return this.ingredientsService.getById(id)
	}

	@Mutation(() => IngredientModel)
	@Auth(Role.ADMIN)
	createIngredient(@Args('input') input: IngredientCreateInput) {
		return this.ingredientsService.create(input)
	}

	@Mutation(() => IngredientModel)
	@Auth(Role.ADMIN)
	updateIngredient(
		@Args('id') id: string,
		@Args('input') input: IngredientCreateInput
	) {
		return this.ingredientsService.update(id, input)
	}

	@Mutation(() => Boolean)
	@Auth(Role.ADMIN)
	async deleteIngredientById(@Args('id') id: string) {
		try {
			const ingredient = await this.ingredientsService.deleteById(id)
			return !!ingredient
		} catch (error) {
			return false
		}
	}
}
