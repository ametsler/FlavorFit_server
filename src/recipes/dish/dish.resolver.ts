import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DishService } from './dish.service';
import { DishModel } from './models/dish.model';
import { CreateDishInput } from './inputs/create-dish.input';
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'

@Resolver(() => DishModel)
export class DishResolver {
	constructor(private readonly dishService: DishService) {}

	@Mutation(() => DishModel)
	@Auth(Role.ADMIN)
	createDishType(@Args('data') data: CreateDishInput) {
		return this.dishService.create(data)
	}

	@Mutation(() => DishModel)
	@Auth(Role.ADMIN)
	removeDish(@Args('id', { type: () => String }) id: string) {
		return this.dishService.remove(id)
	}

	@Query(() => [DishModel], { name: 'dishTypes' })
	findAll() {
		return this.dishService.findAll()
	}

	@Mutation(() => DishModel)
	updateDish(@Args('id') id: string, @Args('data') data: CreateDishInput) {
		return this.dishService.update(id, data)
	}
}
