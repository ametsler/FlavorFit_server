import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeViewUpdateWithoutRecipeInput } from './recipe-view-update-without-recipe.input';

@InputType()
export class RecipeViewUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeViewWhereUniqueInput, {nullable:false})
    @Type(() => RecipeViewWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeViewUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeViewUpdateWithoutRecipeInput)
    data!: RecipeViewUpdateWithoutRecipeInput;
}
