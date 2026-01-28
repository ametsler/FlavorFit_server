import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { Int } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-recipe.input';
import { RecipeStepUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-step/recipe-step-unchecked-create-nested-many-without-recipe.input';
import { CommentUncheckedCreateNestedManyWithoutRecipeInput } from '../comment/comment-unchecked-create-nested-many-without-recipe.input';
import { RecipeLikeUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-like/recipe-like-unchecked-create-nested-many-without-recipe.input';
import { RecipeViewUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-view/recipe-view-unchecked-create-nested-many-without-recipe.input';

@InputType()
export class RecipeUncheckedCreateWithoutDishTypeInput {

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

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput)
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeStepUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeStepUncheckedCreateNestedManyWithoutRecipeInput)
    recipeSteps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => CommentUncheckedCreateNestedManyWithoutRecipeInput)
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeLikeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeLikeUncheckedCreateNestedManyWithoutRecipeInput)
    likes?: RecipeLikeUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeViewUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeViewUncheckedCreateNestedManyWithoutRecipeInput)
    RecipeView?: RecipeViewUncheckedCreateNestedManyWithoutRecipeInput;
}
