import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';
import { Type } from 'class-transformer';
import { CommentLikeCreateWithoutUserInput } from './comment-like-create-without-user.input';

@InputType()
export class CommentLikeCreateOrConnectWithoutUserInput {

    @Field(() => CommentLikeWhereUniqueInput, {nullable:false})
    @Type(() => CommentLikeWhereUniqueInput)
    where!: Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>;

    @Field(() => CommentLikeCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentLikeCreateWithoutUserInput)
    create!: CommentLikeCreateWithoutUserInput;
}
