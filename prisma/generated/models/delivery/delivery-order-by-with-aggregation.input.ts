import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeliveryCountOrderByAggregateInput } from './delivery-count-order-by-aggregate.input';
import { DeliveryMaxOrderByAggregateInput } from './delivery-max-order-by-aggregate.input';
import { DeliveryMinOrderByAggregateInput } from './delivery-min-order-by-aggregate.input';

@InputType()
export class DeliveryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => DeliveryCountOrderByAggregateInput, {nullable:true})
    _count?: DeliveryCountOrderByAggregateInput;

    @Field(() => DeliveryMaxOrderByAggregateInput, {nullable:true})
    _max?: DeliveryMaxOrderByAggregateInput;

    @Field(() => DeliveryMinOrderByAggregateInput, {nullable:true})
    _min?: DeliveryMinOrderByAggregateInput;
}
