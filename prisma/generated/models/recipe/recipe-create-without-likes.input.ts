import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { Int } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-recipe.input';
import { RecipeStepCreateNestedManyWithoutRecipeInput } from '../recipe-step/recipe-step-create-nested-many-without-recipe.input';
import { CommentCreateNestedManyWithoutRecipeInput } from '../comment/comment-create-nested-many-without-recipe.input';
import { RecipeViewCreateNestedManyWithoutRecipeInput } from '../recipe-view/recipe-view-create-nested-many-without-recipe.input';
import { UserCreateNestedOneWithoutRecipeInput } from '../user/user-create-nested-one-without-recipe.input';
import { DishTypeCreateNestedOneWithoutRecipesInput } from '../dish-type/dish-type-create-nested-one-without-recipes.input';

@InputType()
export class RecipeCreateWithoutLikesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    cuisineType!: string;

    @Field(() => Difficulty, {nullable:false})
    difficulty!: `${Difficulty}`;

    @Field(() => Int, {nullable:false})
    prepTime!: number;

    @Field(() => Int, {nullable:false})
    cookTime!: number;

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

    @Field(() => RecipeIngredientCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeIngredientCreateNestedManyWithoutRecipeInput)
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeStepCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeStepCreateNestedManyWithoutRecipeInput)
    recipeSteps?: RecipeStepCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => CommentCreateNestedManyWithoutRecipeInput)
    comments?: CommentCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeViewCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeViewCreateNestedManyWithoutRecipeInput)
    RecipeView?: RecipeViewCreateNestedManyWithoutRecipeInput;

    @Field(() => UserCreateNestedOneWithoutRecipeInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutRecipeInput)
    author!: UserCreateNestedOneWithoutRecipeInput;

    @Field(() => DishTypeCreateNestedOneWithoutRecipesInput, {nullable:false})
    @Type(() => DishTypeCreateNestedOneWithoutRecipesInput)
    dishType!: DishTypeCreateNestedOneWithoutRecipesInput;
}
