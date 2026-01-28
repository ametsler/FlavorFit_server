import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutLikesInput } from './comment-create-without-likes.input';

@InputType()
export class CommentCreateOrConnectWithoutLikesInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutLikesInput, {nullable:false})
    @Type(() => CommentCreateWithoutLikesInput)
    create!: CommentCreateWithoutLikesInput;
}
