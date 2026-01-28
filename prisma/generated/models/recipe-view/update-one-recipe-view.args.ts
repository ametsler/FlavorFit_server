import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeViewUpdateInput } from './recipe-view-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';

@ArgsType()
export class UpdateOneRecipeViewArgs {

    @Field(() => RecipeViewUpdateInput, {nullable:false})
    @Type(() => RecipeViewUpdateInput)
    data!: RecipeViewUpdateInput;

    @Field(() => RecipeViewWhereUniqueInput, {nullable:false})
    @Type(() => RecipeViewWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>;
}
