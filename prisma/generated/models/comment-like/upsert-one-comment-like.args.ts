import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';
import { Type } from 'class-transformer';
import { CommentLikeCreateInput } from './comment-like-create.input';
import { CommentLikeUpdateInput } from './comment-like-update.input';

@ArgsType()
export class UpsertOneCommentLikeArgs {

    @Field(() => CommentLikeWhereUniqueInput, {nullable:false})
    @Type(() => CommentLikeWhereUniqueInput)
    where!: Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>;

    @Field(() => CommentLikeCreateInput, {nullable:false})
    @Type(() => CommentLikeCreateInput)
    create!: CommentLikeCreateInput;

    @Field(() => CommentLikeUpdateInput, {nullable:false})
    @Type(() => CommentLikeUpdateInput)
    update!: CommentLikeUpdateInput;
}
