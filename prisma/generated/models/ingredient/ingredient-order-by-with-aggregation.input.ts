import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { IngredientCountOrderByAggregateInput } from './ingredient-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { IngredientAvgOrderByAggregateInput } from './ingredient-avg-order-by-aggregate.input';
import { IngredientMaxOrderByAggregateInput } from './ingredient-max-order-by-aggregate.input';
import { IngredientMinOrderByAggregateInput } from './ingredient-min-order-by-aggregate.input';
import { IngredientSumOrderByAggregateInput } from './ingredient-sum-order-by-aggregate.input';

@InputType()
export class IngredientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    iconUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => IngredientCountOrderByAggregateInput, {nullable:true})
    @Type(() => IngredientCountOrderByAggregateInput)
    _count?: IngredientCountOrderByAggregateInput;

    @Field(() => IngredientAvgOrderByAggregateInput, {nullable:true})
    @Type(() => IngredientAvgOrderByAggregateInput)
    _avg?: IngredientAvgOrderByAggregateInput;

    @Field(() => IngredientMaxOrderByAggregateInput, {nullable:true})
    @Type(() => IngredientMaxOrderByAggregateInput)
    _max?: IngredientMaxOrderByAggregateInput;

    @Field(() => IngredientMinOrderByAggregateInput, {nullable:true})
    @Type(() => IngredientMinOrderByAggregateInput)
    _min?: IngredientMinOrderByAggregateInput;

    @Field(() => IngredientSumOrderByAggregateInput, {nullable:true})
    @Type(() => IngredientSumOrderByAggregateInput)
    _sum?: IngredientSumOrderByAggregateInput;
}
