import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecipeInput } from './user-create-without-recipe.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRecipeInput } from './user-create-or-connect-without-recipe.input';
import { UserUpsertWithoutRecipeInput } from './user-upsert-without-recipe.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRecipeInput } from './user-update-to-one-with-where-without-recipe.input';

@InputType()
export class UserUpdateOneRequiredWithoutRecipeNestedInput {

    @Field(() => UserCreateWithoutRecipeInput, {nullable:true})
    @Type(() => UserCreateWithoutRecipeInput)
    create?: UserCreateWithoutRecipeInput;

    @Field(() => UserCreateOrConnectWithoutRecipeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: UserCreateOrConnectWithoutRecipeInput;

    @Field(() => UserUpsertWithoutRecipeInput, {nullable:true})
    @Type(() => UserUpsertWithoutRecipeInput)
    upsert?: UserUpsertWithoutRecipeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRecipeInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRecipeInput)
    update?: UserUpdateToOneWithWhereWithoutRecipeInput;
}
