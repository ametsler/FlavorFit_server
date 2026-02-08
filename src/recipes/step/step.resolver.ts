import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StepService } from './step.service';
import { RecipeStepModel } from './models/step.model';
import { CreateStepInput } from './inputs/create-step.input';
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'

@Resolver(() => RecipeStepModel)
export class StepResolver {
	constructor(private readonly stepService: StepService) {}

	@Mutation(() => RecipeStepModel)
	@Auth(Role.ADMIN)
	createStep(@Args('input') input: CreateStepInput) {
		return this.stepService.create(input)
	}

	@Query(() => [RecipeStepModel], { name: 'step' })
	@Auth()
	findAllSteps() {
		return this.stepService.findAll()
	}

	@Query(() => RecipeStepModel, { name: 'step' })
	@Auth()
	findOneStep(@Args('id', { type: () => Int }) id: number) {
		return this.stepService.findOne(id)
	}

	@Mutation(() => RecipeStepModel)
	@Auth(Role.ADMIN)
	updateStep(@Args('id') id: string, @Args('input') input: CreateStepInput) {
		return this.stepService.update(id, input)
	}

	@Mutation(() => RecipeStepModel)
	@Auth(Role.ADMIN)
	removeStep(@Args('id', { type: () => Int }) id: number) {
		return this.stepService.remove(id)
	}
}
