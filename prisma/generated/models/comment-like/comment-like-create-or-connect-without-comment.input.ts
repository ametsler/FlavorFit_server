import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';
import { Type } from 'class-transformer';
import { CommentLikeCreateWithoutCommentInput } from './comment-like-create-without-comment.input';

@InputType()
export class CommentLikeCreateOrConnectWithoutCommentInput {

    @Field(() => CommentLikeWhereUniqueInput, {nullable:false})
    @Type(() => CommentLikeWhereUniqueInput)
    where!: Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>;

    @Field(() => CommentLikeCreateWithoutCommentInput, {nullable:false})
    @Type(() => CommentLikeCreateWithoutCommentInput)
    create!: CommentLikeCreateWithoutCommentInput;
}
