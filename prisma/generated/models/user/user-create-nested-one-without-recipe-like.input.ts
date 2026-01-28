import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecipeLikeInput } from './user-create-without-recipe-like.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRecipeLikeInput } from './user-create-or-connect-without-recipe-like.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRecipeLikeInput {

    @Field(() => UserCreateWithoutRecipeLikeInput, {nullable:true})
    @Type(() => UserCreateWithoutRecipeLikeInput)
    create?: UserCreateWithoutRecipeLikeInput;

    @Field(() => UserCreateOrConnectWithoutRecipeLikeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecipeLikeInput)
    connectOrCreate?: UserCreateOrConnectWithoutRecipeLikeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
