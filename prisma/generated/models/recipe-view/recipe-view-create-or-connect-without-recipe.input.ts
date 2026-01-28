import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeViewCreateWithoutRecipeInput } from './recipe-view-create-without-recipe.input';

@InputType()
export class RecipeViewCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipeViewWhereUniqueInput, {nullable:false})
    @Type(() => RecipeViewWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeViewCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeViewCreateWithoutRecipeInput)
    create!: RecipeViewCreateWithoutRecipeInput;
}
