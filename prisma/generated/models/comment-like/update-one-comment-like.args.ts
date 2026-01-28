import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentLikeUpdateInput } from './comment-like-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';

@ArgsType()
export class UpdateOneCommentLikeArgs {

    @Field(() => CommentLikeUpdateInput, {nullable:false})
    @Type(() => CommentLikeUpdateInput)
    data!: CommentLikeUpdateInput;

    @Field(() => CommentLikeWhereUniqueInput, {nullable:false})
    @Type(() => CommentLikeWhereUniqueInput)
    where!: Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>;
}
