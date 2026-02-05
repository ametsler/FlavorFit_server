import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ViewService } from './view.service'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { RecipeViewModel } from './models/view.model'
import { CreateViewInput } from './inputs/create-view.input'

@Resolver(() => RecipeViewModel)
export class ViewResolver {
	constructor(private readonly viewService: ViewService) {}

	@Mutation(() => RecipeViewModel)
	createLike(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateViewInput
	) {
		return this.viewService.create(userId, input)
	}

	@Query(() => [RecipeViewModel], { name: 'like' })
	findCount(@Args('input') input: CreateViewInput) {
		return this.viewService.findCount(input)
	}

	@Mutation(() => RecipeViewModel)
	removeLike(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateViewInput
	) {
		return this.viewService.remove(userId, input)
	}
}
