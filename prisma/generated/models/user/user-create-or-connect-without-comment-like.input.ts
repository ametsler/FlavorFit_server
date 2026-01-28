import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommentLikeInput } from './user-create-without-comment-like.input';

@InputType()
export class UserCreateOrConnectWithoutCommentLikeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutCommentLikeInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentLikeInput)
    create!: UserCreateWithoutCommentLikeInput;
}
