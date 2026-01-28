import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecipeInput } from './user-create-without-recipe.input';

@InputType()
export class UserCreateOrConnectWithoutRecipeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutRecipeInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipeInput)
    create!: UserCreateWithoutRecipeInput;
}
