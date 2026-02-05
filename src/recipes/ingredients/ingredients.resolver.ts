import { Args, Query, Resolver } from '@nestjs/graphql'
import { IngredientsService } from './ingredients.service'
import { IngredientCreateInput } from './inputs/create-ingredient'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { IngredientModel } from './models/ingredient.model'

@Resolver()
export class IngredientsResolver {
	constructor(private readonly ingredientsService: IngredientsService) {}

	@Query(() => IngredientModel, { name: 'ingredients' })
	@Auth()
	getAll() {
		return this.ingredientsService.getAll()
	}

	@Query(() => IngredientModel, { name: 'ingredientById' })
	@Auth()
	getById(@Args('id') id: string) {
		return this.ingredientsService.getById(id)
	}

	@Query(() => IngredientModel)
	@Auth()
	createIngredient(@Args('input') input: IngredientCreateInput) {
		return this.ingredientsService.create(input)
	}

	@Query(() => IngredientModel)
	@Auth()
	updateIngredient(
		@Args('id') id: string,
		@Args('input') input: IngredientCreateInput
	) {
		return this.ingredientsService.update(id, input)
	}

	@Query(() => Boolean)
	@Auth()
	deleteIngredientById(@Args('id') id: string) {
		return this.ingredientsService.deleteById(id)
	}
}
