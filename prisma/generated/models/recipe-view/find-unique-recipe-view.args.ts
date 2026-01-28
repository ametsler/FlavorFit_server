import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeViewArgs {

    @Field(() => RecipeViewWhereUniqueInput, {nullable:false})
    @Type(() => RecipeViewWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>;
}
