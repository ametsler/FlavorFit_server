import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { RecipeCountOrderByAggregateInput } from './recipe-count-order-by-aggregate.input';
import { RecipeAvgOrderByAggregateInput } from './recipe-avg-order-by-aggregate.input';
import { RecipeMaxOrderByAggregateInput } from './recipe-max-order-by-aggregate.input';
import { RecipeMinOrderByAggregateInput } from './recipe-min-order-by-aggregate.input';
import { RecipeSumOrderByAggregateInput } from './recipe-sum-order-by-aggregate.input';

@InputType()
export class RecipeOrderByWithAggregationInput {

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

    @Field(() => RecipeCountOrderByAggregateInput, {nullable:true})
    @Type(() => RecipeCountOrderByAggregateInput)
    _count?: RecipeCountOrderByAggregateInput;

    @Field(() => RecipeAvgOrderByAggregateInput, {nullable:true})
    @Type(() => RecipeAvgOrderByAggregateInput)
    _avg?: RecipeAvgOrderByAggregateInput;

    @Field(() => RecipeMaxOrderByAggregateInput, {nullable:true})
    @Type(() => RecipeMaxOrderByAggregateInput)
    _max?: RecipeMaxOrderByAggregateInput;

    @Field(() => RecipeMinOrderByAggregateInput, {nullable:true})
    @Type(() => RecipeMinOrderByAggregateInput)
    _min?: RecipeMinOrderByAggregateInput;

    @Field(() => RecipeSumOrderByAggregateInput, {nullable:true})
    @Type(() => RecipeSumOrderByAggregateInput)
    _sum?: RecipeSumOrderByAggregateInput;
}
