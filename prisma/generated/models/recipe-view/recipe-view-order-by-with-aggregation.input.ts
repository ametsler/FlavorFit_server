import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeViewCountOrderByAggregateInput } from './recipe-view-count-order-by-aggregate.input';
import { RecipeViewMaxOrderByAggregateInput } from './recipe-view-max-order-by-aggregate.input';
import { RecipeViewMinOrderByAggregateInput } from './recipe-view-min-order-by-aggregate.input';

@InputType()
export class RecipeViewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeViewCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeViewCountOrderByAggregateInput;

    @Field(() => RecipeViewMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeViewMaxOrderByAggregateInput;

    @Field(() => RecipeViewMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeViewMinOrderByAggregateInput;
}
