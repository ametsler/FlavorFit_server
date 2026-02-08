import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { LikeService } from './like.service'
import { CommentLikeModel } from './models/like.model'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { CreateLikeInput } from 'src/comments/like/inputs/create-like.input'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Resolver(() => CommentLikeModel)
export class LikeResolver {
	constructor(private readonly likeService: LikeService) {}

	@Mutation(() => CommentLikeModel)
	@Auth()
	createCommentLike(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateLikeInput
	) {
		return this.likeService.create(userId, input)
	}

	@Query(() => [CommentLikeModel])
	@Auth()
	findCommentLikeCount(@Args('input') input: CreateLikeInput) {
		return this.likeService.findCount(input)
	}

	@Mutation(() => CommentLikeModel)
	@Auth()
	removeCommentLike(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateLikeInput
	) {
		return this.likeService.remove(userId, input)
	}
}
