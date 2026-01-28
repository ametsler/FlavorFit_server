import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutDishTypeInput } from './recipe-update-without-dish-type.input';

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutDishTypeInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeUpdateWithoutDishTypeInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutDishTypeInput)
    data!: RecipeUpdateWithoutDishTypeInput;
}
