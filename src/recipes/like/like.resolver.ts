import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LikeService } from './like.service';
import { CreateRecipeLikeInput } from './inputs/create-recipe-like.input';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { RecipeLikeModel } from 'src/recipes/like/models/recipe-like.model'

@Resolver(() => RecipeLikeModel)
export class LikeResolver {
	constructor(private readonly likeService: LikeService) {}

	@Mutation(() => RecipeLikeModel)
	createLike(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateRecipeLikeInput
	) {
		return this.likeService.create(userId, input)
	}

	@Query(() => [RecipeLikeModel], { name: 'like' })
	findCount(@Args('input') input: CreateRecipeLikeInput) {
		return this.likeService.findCount(input)
	}

	@Mutation(() => RecipeLikeModel)
	removeLike(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateRecipeLikeInput
	) {
		return this.likeService.remove(userId, input)
	}
}
