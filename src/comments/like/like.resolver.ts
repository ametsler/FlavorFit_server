import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { LikeService } from './like.service'
import { CommentLikeModel } from './models/like.model'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Resolver(() => CommentLikeModel)
export class LikeResolver {
	constructor(private readonly likeService: LikeService) {}

	@Mutation(() => Boolean)
	@Auth()
	async toggleCommentLike(
		@CurrentUser('id') userId: string,
		@Args('commentId') commentId: string
	) {
		await this.likeService.toggle(userId, commentId)
		return true
	}

	@Query(() => Number)
	@Auth()
	findCommentLikeCount(@Args('commentId') commentId: string) {
		return this.likeService.findCount(commentId)
	}
}
