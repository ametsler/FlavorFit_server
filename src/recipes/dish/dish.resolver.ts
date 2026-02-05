import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DishService } from './dish.service';
import { DishModel } from './models/dish.model';
import { CreateDishInput } from './inputs/create-dish.input';

@Resolver(() => DishModel)
export class DishResolver {
	constructor(private readonly dishService: DishService) {}

	@Mutation(() => DishModel)
	createDish(@Args('createDishInput') createDishInput: CreateDishInput) {
		return this.dishService.create(createDishInput)
	}

	@Query(() => [DishModel], { name: 'dish' })
	findAll() {
		return this.dishService.findAll()
	}

	@Query(() => DishModel, { name: 'dish' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.dishService.findOne(id)
	}

	@Mutation(() => DishModel)
	updateDish(
		@Args('id') id: string,
		@Args('updateDishInput') updateDishInput: CreateDishInput
	) {
		return this.dishService.update(id, updateDishInput)
	}

	@Mutation(() => DishModel)
	removeDish(@Args('id', { type: () => Int }) id: number) {
		return this.dishService.remove(id)
	}
}
