import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';
import { Type } from 'class-transformer';
import { CommentLikeUpdateWithoutUserInput } from './comment-like-update-without-user.input';
import { CommentLikeCreateWithoutUserInput } from './comment-like-create-without-user.input';

@InputType()
export class CommentLikeUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CommentLikeWhereUniqueInput, {nullable:false})
    @Type(() => CommentLikeWhereUniqueInput)
    where!: Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>;

    @Field(() => CommentLikeUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentLikeUpdateWithoutUserInput)
    update!: CommentLikeUpdateWithoutUserInput;

    @Field(() => CommentLikeCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentLikeCreateWithoutUserInput)
    create!: CommentLikeCreateWithoutUserInput;
}
