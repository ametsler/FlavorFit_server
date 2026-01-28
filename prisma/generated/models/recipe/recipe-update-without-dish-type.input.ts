import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { Int } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-recipe-nested.input';
import { RecipeStepUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-update-many-without-recipe-nested.input';
import { CommentUpdateManyWithoutRecipeNestedInput } from '../comment/comment-update-many-without-recipe-nested.input';
import { RecipeLikeUpdateManyWithoutRecipeNestedInput } from '../recipe-like/recipe-like-update-many-without-recipe-nested.input';
import { RecipeViewUpdateManyWithoutRecipeNestedInput } from '../recipe-view/recipe-view-update-many-without-recipe-nested.input';
import { UserUpdateOneRequiredWithoutRecipeNestedInput } from '../user/user-update-one-required-without-recipe-nested.input';

@InputType()
export class RecipeUpdateWithoutDishTypeInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUpdateManyWithoutRecipeNestedInput)
    recipeIngredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeStepUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeStepUpdateManyWithoutRecipeNestedInput)
    recipeSteps?: RecipeStepUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => CommentUpdateManyWithoutRecipeNestedInput)
    comments?: CommentUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeLikeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeLikeUpdateManyWithoutRecipeNestedInput)
    likes?: RecipeLikeUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeViewUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeViewUpdateManyWithoutRecipeNestedInput)
    RecipeView?: RecipeViewUpdateManyWithoutRecipeNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutRecipeNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutRecipeNestedInput)
    author?: UserUpdateOneRequiredWithoutRecipeNestedInput;
}
