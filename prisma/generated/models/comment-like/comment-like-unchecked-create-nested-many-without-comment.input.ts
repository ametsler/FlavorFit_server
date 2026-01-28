import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateWithoutCommentInput } from './comment-like-create-without-comment.input';
import { Type } from 'class-transformer';
import { CommentLikeCreateOrConnectWithoutCommentInput } from './comment-like-create-or-connect-without-comment.input';
import { CommentLikeCreateManyCommentInputEnvelope } from './comment-like-create-many-comment-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';

@InputType()
export class CommentLikeUncheckedCreateNestedManyWithoutCommentInput {

    @Field(() => [CommentLikeCreateWithoutCommentInput], {nullable:true})
    @Type(() => CommentLikeCreateWithoutCommentInput)
    create?: Array<CommentLikeCreateWithoutCommentInput>;

    @Field(() => [CommentLikeCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => CommentLikeCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<CommentLikeCreateOrConnectWithoutCommentInput>;

    @Field(() => CommentLikeCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => CommentLikeCreateManyCommentInputEnvelope)
    createMany?: CommentLikeCreateManyCommentInputEnvelope;

    @Field(() => [CommentLikeWhereUniqueInput], {nullable:true})
    @Type(() => CommentLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>>;
}
