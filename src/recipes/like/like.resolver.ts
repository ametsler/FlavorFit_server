import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LikeService } from './like.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { RecipeLikeModel } from 'src/recipes/like/models/recipe-like.model'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Resolver(() => RecipeLikeModel)
export class LikeResolver {
	constructor(private readonly likeService: LikeService) {}

	@Mutation(() => Boolean)
	@Auth()
	async toggleRecipeLike(
		@CurrentUser('id') userId: string,
		@Args('recipeId') recipeId: string
	) {
		await this.likeService.toggle(userId, recipeId)
		return true
	}

	@Query(() => Number)
	@Auth()
	findRecipeLikeCount(@Args('recipeId') recipeId: string) {
		return this.likeService.findCount(recipeId)
	}
}
