import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StepService } from './step.service';
import { RecipeStepModel } from './models/step.model';
import { CreateStepInput } from './inputs/create-step.input';

@Resolver(() => RecipeStepModel)
export class StepResolver {
	constructor(private readonly stepService: StepService) {}

	@Mutation(() => RecipeStepModel)
	createStep(@Args('input') input: CreateStepInput) {
		return this.stepService.create(input)
	}

	@Query(() => [RecipeStepModel], { name: 'step' })
	findAll() {
		return this.stepService.findAll()
	}

	@Query(() => RecipeStepModel, { name: 'step' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.stepService.findOne(id)
	}

	@Mutation(() => RecipeStepModel)
	updateStep(
		@Args('id') id: string,
		@Args('input') input: CreateStepInput
	) {
		return this.stepService.update(id, input)
	}

	@Mutation(() => RecipeStepModel)
	removeStep(@Args('id', { type: () => Int }) id: number) {
		return this.stepService.remove(id)
	}
}
