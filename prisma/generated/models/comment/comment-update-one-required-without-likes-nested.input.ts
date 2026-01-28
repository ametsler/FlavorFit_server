import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutLikesInput } from './comment-create-without-likes.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutLikesInput } from './comment-create-or-connect-without-likes.input';
import { CommentUpsertWithoutLikesInput } from './comment-upsert-without-likes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateToOneWithWhereWithoutLikesInput } from './comment-update-to-one-with-where-without-likes.input';

@InputType()
export class CommentUpdateOneRequiredWithoutLikesNestedInput {

    @Field(() => CommentCreateWithoutLikesInput, {nullable:true})
    @Type(() => CommentCreateWithoutLikesInput)
    create?: CommentCreateWithoutLikesInput;

    @Field(() => CommentCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutLikesInput)
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput;

    @Field(() => CommentUpsertWithoutLikesInput, {nullable:true})
    @Type(() => CommentUpsertWithoutLikesInput)
    upsert?: CommentUpsertWithoutLikesInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateToOneWithWhereWithoutLikesInput, {nullable:true})
    @Type(() => CommentUpdateToOneWithWhereWithoutLikesInput)
    update?: CommentUpdateToOneWithWhereWithoutLikesInput;
}
