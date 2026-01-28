import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { Int } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-recipe-nested.input';
import { CommentUncheckedUpdateManyWithoutRecipeNestedInput } from '../comment/comment-unchecked-update-many-without-recipe-nested.input';
import { RecipeLikeUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-like/recipe-like-unchecked-update-many-without-recipe-nested.input';
import { RecipeViewUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-view/recipe-view-unchecked-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUncheckedUpdateWithoutRecipeStepsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    cuisineType?: string;

    @Field(() => Difficulty, {nullable:true})
    difficulty?: `${Difficulty}`;

    @Field(() => Int, {nullable:true})
    prepTime?: number;

    @Field(() => Int, {nullable:true})
    cookTime?: number;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:true})
    protein?: number;

    @Field(() => Int, {nullable:true})
    fats?: number;

    @Field(() => Int, {nullable:true})
    fiber?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rating?: Decimal;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => String, {nullable:true})
    dishTypeId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput)
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput)
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeLikeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeLikeUncheckedUpdateManyWithoutRecipeNestedInput)
    likes?: RecipeLikeUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeViewUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeViewUncheckedUpdateManyWithoutRecipeNestedInput)
    RecipeView?: RecipeViewUncheckedUpdateManyWithoutRecipeNestedInput;
}
