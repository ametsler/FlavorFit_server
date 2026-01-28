import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateWithoutUserInput } from './comment-like-create-without-user.input';
import { Type } from 'class-transformer';
import { CommentLikeCreateOrConnectWithoutUserInput } from './comment-like-create-or-connect-without-user.input';
import { CommentLikeCreateManyUserInputEnvelope } from './comment-like-create-many-user-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';

@InputType()
export class CommentLikeCreateNestedManyWithoutUserInput {

    @Field(() => [CommentLikeCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentLikeCreateWithoutUserInput)
    create?: Array<CommentLikeCreateWithoutUserInput>;

    @Field(() => [CommentLikeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentLikeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentLikeCreateOrConnectWithoutUserInput>;

    @Field(() => CommentLikeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentLikeCreateManyUserInputEnvelope)
    createMany?: CommentLikeCreateManyUserInputEnvelope;

    @Field(() => [CommentLikeWhereUniqueInput], {nullable:true})
    @Type(() => CommentLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>>;
}
