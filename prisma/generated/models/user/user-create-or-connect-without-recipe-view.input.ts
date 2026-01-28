import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecipeViewInput } from './user-create-without-recipe-view.input';

@InputType()
export class UserCreateOrConnectWithoutRecipeViewInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutRecipeViewInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipeViewInput)
    create!: UserCreateWithoutRecipeViewInput;
}
