import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { CommentModel } from './models/comment.model';
import { CreateCommentInput } from './inputs/create-comment.input';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'

@Resolver(() => CommentModel)
export class CommentsResolver {
	constructor(private readonly commentsService: CommentsService) {}

	@Mutation(() => CommentModel)
	@Auth()
	createComment(
		@CurrentUser('id') authorId: string,
		@Args('input') input: CreateCommentInput
	) {
		return this.commentsService.create(authorId, input)
	}

	@Query(() => [CommentModel])
	@Auth()
	findAllComments(@Args('recipeId') recipeId: string) {
		return this.commentsService.findAll(recipeId)
	}

	@Mutation(() => CommentModel)
	@Auth()
	updateComment(
		@CurrentUser('id') authorId: string,
		@Args('id') id: string,
		@Args('input') input: CreateCommentInput
	) {
		return this.commentsService.update(authorId, id, input)
	}

	@Mutation(() => CommentModel)
	@Auth(Role.ADMIN)
	removeComment(@Args('id') id: string) {
		return this.commentsService.remove(id)
	}
}
