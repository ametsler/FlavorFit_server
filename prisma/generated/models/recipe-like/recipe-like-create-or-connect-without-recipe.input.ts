import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeLikeCreateWithoutRecipeInput } from './recipe-like-create-without-recipe.input';

@InputType()
export class RecipeLikeCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipeLikeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeLikeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeLikeCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeLikeCreateWithoutRecipeInput)
    create!: RecipeLikeCreateWithoutRecipeInput;
}
