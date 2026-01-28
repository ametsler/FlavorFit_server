import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';
import { RecipeStep } from '../recipe-step/recipe-step.model';
import { Comment } from '../comment/comment.model';
import { RecipeLike } from '../recipe-like/recipe-like.model';
import { RecipeView } from '../recipe-view/recipe-view.model';
import { User } from '../user/user.model';
import { DishType } from '../dish-type/dish-type.model';

@ObjectType()
export class Recipe {

    @Field(() => ID, {nullable:false})
    id!: string;

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
    calories!: number | null;

    @Field(() => Int, {nullable:true})
    protein!: number | null;

    @Field(() => Int, {nullable:true})
    fats!: number | null;

    @Field(() => Int, {nullable:true})
    fiber!: number | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    rating!: Decimal | null;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:false})
    dishTypeId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RecipeIngredient], {nullable:true})
    recipeIngredients?: Array<RecipeIngredient>;

    @Field(() => [RecipeStep], {nullable:true})
    recipeSteps?: Array<RecipeStep>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [RecipeLike], {nullable:true})
    likes?: Array<RecipeLike>;

    @Field(() => [RecipeView], {nullable:true})
    RecipeView?: Array<RecipeView>;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => DishType, {nullable:false})
    dishType?: DishType;
}
