import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { CommentModel } from './models/comment.model';
import { CreateCommentInput } from './inputs/create-comment.input';

@Resolver(() => CommentModel)
export class CommentsResolver {
	constructor(private readonly commentsService: CommentsService) {}

	@Mutation(() => CommentModel)
	createComment(
		@Args('createCommentInput') createCommentInput: CreateCommentInput
	) {
		return this.commentsService.create(createCommentInput)
	}

	@Query(() => [CommentModel], { name: 'comments' })
	findAll() {
		return this.commentsService.findAll()
	}

	@Query(() => CommentModel, { name: 'comment' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.commentsService.findOne(id)
	}

	@Mutation(() => CommentModel)
	updateComment(
		@Args('id') id: string,
		@Args('input') input: CreateCommentInput
	) {
		return this.commentsService.update(
			id,
			input
		)
	}

	@Mutation(() => CommentModel)
	removeComment(@Args('id', { type: () => Int }) id: number) {
		return this.commentsService.remove(id)
	}
}
