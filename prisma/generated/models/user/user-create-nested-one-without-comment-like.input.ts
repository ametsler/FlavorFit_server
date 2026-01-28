import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommentLikeInput } from './user-create-without-comment-like.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCommentLikeInput } from './user-create-or-connect-without-comment-like.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCommentLikeInput {

    @Field(() => UserCreateWithoutCommentLikeInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentLikeInput)
    create?: UserCreateWithoutCommentLikeInput;

    @Field(() => UserCreateOrConnectWithoutCommentLikeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentLikeInput)
    connectOrCreate?: UserCreateOrConnectWithoutCommentLikeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
