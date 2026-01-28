import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentLikeWhereInput } from './comment-like-where.input';
import { Type } from 'class-transformer';
import { CommentLikeOrderByWithRelationInput } from './comment-like-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentLikeScalarFieldEnum } from './comment-like-scalar-field.enum';

@ArgsType()
export class FindFirstCommentLikeArgs {

    @Field(() => CommentLikeWhereInput, {nullable:true})
    @Type(() => CommentLikeWhereInput)
    where?: CommentLikeWhereInput;

    @Field(() => [CommentLikeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentLikeOrderByWithRelationInput>;

    @Field(() => CommentLikeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommentLikeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommentLikeScalarFieldEnum}`>;
}
