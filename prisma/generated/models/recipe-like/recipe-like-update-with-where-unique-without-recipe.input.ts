import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeLikeUpdateWithoutRecipeInput } from './recipe-like-update-without-recipe.input';

@InputType()
export class RecipeLikeUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeLikeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeLikeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeLikeUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeLikeUpdateWithoutRecipeInput)
    data!: RecipeLikeUpdateWithoutRecipeInput;
}
