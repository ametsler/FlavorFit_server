import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecipeViewInput } from './user-create-without-recipe-view.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRecipeViewInput } from './user-create-or-connect-without-recipe-view.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRecipeViewInput {

    @Field(() => UserCreateWithoutRecipeViewInput, {nullable:true})
    @Type(() => UserCreateWithoutRecipeViewInput)
    create?: UserCreateWithoutRecipeViewInput;

    @Field(() => UserCreateOrConnectWithoutRecipeViewInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecipeViewInput)
    connectOrCreate?: UserCreateOrConnectWithoutRecipeViewInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
