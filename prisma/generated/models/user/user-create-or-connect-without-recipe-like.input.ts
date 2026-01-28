import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecipeLikeInput } from './user-create-without-recipe-like.input';

@InputType()
export class UserCreateOrConnectWithoutRecipeLikeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutRecipeLikeInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipeLikeInput)
    create!: UserCreateWithoutRecipeLikeInput;
}
