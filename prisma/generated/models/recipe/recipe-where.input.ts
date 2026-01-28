import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDifficultyFilter } from '../prisma/enum-difficulty-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';
import { RecipeStepListRelationFilter } from '../recipe-step/recipe-step-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { RecipeLikeListRelationFilter } from '../recipe-like/recipe-like-list-relation-filter.input';
import { RecipeViewListRelationFilter } from '../recipe-view/recipe-view-list-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { DishTypeScalarRelationFilter } from '../dish-type/dish-type-scalar-relation-filter.input';

@InputType()
export class RecipeWhereInput {

    @Field(() => [RecipeWhereInput], {nullable:true})
    @Type(() => RecipeWhereInput)
    AND?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    @Type(() => RecipeWhereInput)
    OR?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    @Type(() => RecipeWhereInput)
    NOT?: Array<RecipeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cuisineType?: StringFilter;

    @Field(() => EnumDifficultyFilter, {nullable:true})
    difficulty?: EnumDifficultyFilter;

    @Field(() => IntFilter, {nullable:true})
    prepTime?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    cookTime?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    calories?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    protein?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fats?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fiber?: IntNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    rating?: DecimalNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dishTypeId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    @Type(() => RecipeIngredientListRelationFilter)
    recipeIngredients?: RecipeIngredientListRelationFilter;

    @Field(() => RecipeStepListRelationFilter, {nullable:true})
    @Type(() => RecipeStepListRelationFilter)
    recipeSteps?: RecipeStepListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    @Type(() => CommentListRelationFilter)
    comments?: CommentListRelationFilter;

    @Field(() => RecipeLikeListRelationFilter, {nullable:true})
    @Type(() => RecipeLikeListRelationFilter)
    likes?: RecipeLikeListRelationFilter;

    @Field(() => RecipeViewListRelationFilter, {nullable:true})
    @Type(() => RecipeViewListRelationFilter)
    RecipeView?: RecipeViewListRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    author?: UserScalarRelationFilter;

    @Field(() => DishTypeScalarRelationFilter, {nullable:true})
    @Type(() => DishTypeScalarRelationFilter)
    dishType?: DishTypeScalarRelationFilter;
}
