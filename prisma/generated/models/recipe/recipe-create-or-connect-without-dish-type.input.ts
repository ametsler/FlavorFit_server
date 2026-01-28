import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutDishTypeInput } from './recipe-create-without-dish-type.input';

@InputType()
export class RecipeCreateOrConnectWithoutDishTypeInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeCreateWithoutDishTypeInput, {nullable:false})
    @Type(() => RecipeCreateWithoutDishTypeInput)
    create!: RecipeCreateWithoutDishTypeInput;
}
