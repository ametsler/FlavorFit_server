import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeLikeCountOrderByAggregateInput } from './recipe-like-count-order-by-aggregate.input';
import { RecipeLikeMaxOrderByAggregateInput } from './recipe-like-max-order-by-aggregate.input';
import { RecipeLikeMinOrderByAggregateInput } from './recipe-like-min-order-by-aggregate.input';

@InputType()
export class RecipeLikeOrderByWithAggregationInput {

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

    @Field(() => RecipeLikeCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeLikeCountOrderByAggregateInput;

    @Field(() => RecipeLikeMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeLikeMaxOrderByAggregateInput;

    @Field(() => RecipeLikeMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeLikeMinOrderByAggregateInput;
}
