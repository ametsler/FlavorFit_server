import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DishTypeCountOrderByAggregateInput } from './dish-type-count-order-by-aggregate.input';
import { DishTypeAvgOrderByAggregateInput } from './dish-type-avg-order-by-aggregate.input';
import { DishTypeMaxOrderByAggregateInput } from './dish-type-max-order-by-aggregate.input';
import { DishTypeMinOrderByAggregateInput } from './dish-type-min-order-by-aggregate.input';
import { DishTypeSumOrderByAggregateInput } from './dish-type-sum-order-by-aggregate.input';

@InputType()
export class DishTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => DishTypeCountOrderByAggregateInput, {nullable:true})
    _count?: DishTypeCountOrderByAggregateInput;

    @Field(() => DishTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: DishTypeAvgOrderByAggregateInput;

    @Field(() => DishTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: DishTypeMaxOrderByAggregateInput;

    @Field(() => DishTypeMinOrderByAggregateInput, {nullable:true})
    _min?: DishTypeMinOrderByAggregateInput;

    @Field(() => DishTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: DishTypeSumOrderByAggregateInput;
}
