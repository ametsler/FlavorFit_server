import { Field, ID, ObjectType } from '@nestjs/graphql'
import { CommentModel } from 'src/comments/models/comment.model'
import { UserModel } from 'src/users/models/user.model'

@ObjectType()
export class CommentLikeModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	commentId!: string

	@Field(() => String, { nullable: false })
	userId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => CommentModel, { nullable: false })
	comment?: CommentModel

	@Field(() => UserModel, { nullable: false })
	user?: UserModel
}
