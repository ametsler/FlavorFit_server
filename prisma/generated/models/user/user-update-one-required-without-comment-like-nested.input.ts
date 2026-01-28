import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommentLikeInput } from './user-create-without-comment-like.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCommentLikeInput } from './user-create-or-connect-without-comment-like.input';
import { UserUpsertWithoutCommentLikeInput } from './user-upsert-without-comment-like.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCommentLikeInput } from './user-update-to-one-with-where-without-comment-like.input';

@InputType()
export class UserUpdateOneRequiredWithoutCommentLikeNestedInput {

    @Field(() => UserCreateWithoutCommentLikeInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentLikeInput)
    create?: UserCreateWithoutCommentLikeInput;

    @Field(() => UserCreateOrConnectWithoutCommentLikeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentLikeInput)
    connectOrCreate?: UserCreateOrConnectWithoutCommentLikeInput;

    @Field(() => UserUpsertWithoutCommentLikeInput, {nullable:true})
    @Type(() => UserUpsertWithoutCommentLikeInput)
    upsert?: UserUpsertWithoutCommentLikeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCommentLikeInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCommentLikeInput)
    update?: UserUpdateToOneWithWhereWithoutCommentLikeInput;
}
