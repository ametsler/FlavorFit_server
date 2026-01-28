import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeViewCreateInput } from './recipe-view-create.input';
import { RecipeViewUpdateInput } from './recipe-view-update.input';

@ArgsType()
export class UpsertOneRecipeViewArgs {

    @Field(() => RecipeViewWhereUniqueInput, {nullable:false})
    @Type(() => RecipeViewWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeViewCreateInput, {nullable:false})
    @Type(() => RecipeViewCreateInput)
    create!: RecipeViewCreateInput;

    @Field(() => RecipeViewUpdateInput, {nullable:false})
    @Type(() => RecipeViewUpdateInput)
    update!: RecipeViewUpdateInput;
}
