import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { RecipeIngredientOrderByRelationAggregateInput } from '../recipe-ingredient/recipe-ingredient-order-by-relation-aggregate.input';
import { RecipeStepOrderByRelationAggregateInput } from '../recipe-step/recipe-step-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { RecipeLikeOrderByRelationAggregateInput } from '../recipe-like/recipe-like-order-by-relation-aggregate.input';
import { RecipeViewOrderByRelationAggregateInput } from '../recipe-view/recipe-view-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DishTypeOrderByWithRelationInput } from '../dish-type/dish-type-order-by-with-relation.input';

@InputType()
export class RecipeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cuisineType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    difficulty?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    calories?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    protein?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fats?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fiber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    rating?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    dishTypeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeIngredientOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecipeIngredientOrderByRelationAggregateInput)
    recipeIngredients?: RecipeIngredientOrderByRelationAggregateInput;

    @Field(() => RecipeStepOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecipeStepOrderByRelationAggregateInput)
    recipeSteps?: RecipeStepOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CommentOrderByRelationAggregateInput)
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => RecipeLikeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecipeLikeOrderByRelationAggregateInput)
    likes?: RecipeLikeOrderByRelationAggregateInput;

    @Field(() => RecipeViewOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecipeViewOrderByRelationAggregateInput)
    RecipeView?: RecipeViewOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    author?: UserOrderByWithRelationInput;

    @Field(() => DishTypeOrderByWithRelationInput, {nullable:true})
    @Type(() => DishTypeOrderByWithRelationInput)
    dishType?: DishTypeOrderByWithRelationInput;
}
