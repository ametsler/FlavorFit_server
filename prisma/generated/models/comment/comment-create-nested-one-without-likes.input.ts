import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutLikesInput } from './comment-create-without-likes.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutLikesInput } from './comment-create-or-connect-without-likes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedOneWithoutLikesInput {

    @Field(() => CommentCreateWithoutLikesInput, {nullable:true})
    @Type(() => CommentCreateWithoutLikesInput)
    create?: CommentCreateWithoutLikesInput;

    @Field(() => CommentCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutLikesInput)
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
