import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { LikeService } from './like.service'
import { CommentLikeModel } from './models/like.model'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { CreateLikeInput } from 'src/comments/like/inputs/create-like.input'

@Resolver(() => CommentLikeModel)
export class LikeResolver {
	constructor(private readonly likeService: LikeService) {}

	@Mutation(() => CommentLikeModel)
	createLike(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateLikeInput
	) {
		return this.likeService.create(userId, input)
	}

	@Query(() => [CommentLikeModel], { name: 'like' })
	findCount(@Args('input') input: CreateLikeInput) {
		return this.likeService.findCount(input)
	}

	@Mutation(() => CommentLikeModel)
	removeLike(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateLikeInput
	) {
		return this.likeService.remove(userId, input)
	}
}
