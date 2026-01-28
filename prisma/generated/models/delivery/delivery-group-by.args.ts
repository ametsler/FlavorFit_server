import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeliveryWhereInput } from './delivery-where.input';
import { Type } from 'class-transformer';
import { DeliveryOrderByWithAggregationInput } from './delivery-order-by-with-aggregation.input';
import { DeliveryScalarFieldEnum } from './delivery-scalar-field.enum';
import { DeliveryScalarWhereWithAggregatesInput } from './delivery-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DeliveryCountAggregateInput } from './delivery-count-aggregate.input';
import { DeliveryMinAggregateInput } from './delivery-min-aggregate.input';
import { DeliveryMaxAggregateInput } from './delivery-max-aggregate.input';

@ArgsType()
export class DeliveryGroupByArgs {

    @Field(() => DeliveryWhereInput, {nullable:true})
    @Type(() => DeliveryWhereInput)
    where?: DeliveryWhereInput;

    @Field(() => [DeliveryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DeliveryOrderByWithAggregationInput>;

    @Field(() => [DeliveryScalarFieldEnum], {nullable:false})
    by!: Array<`${DeliveryScalarFieldEnum}`>;

    @Field(() => DeliveryScalarWhereWithAggregatesInput, {nullable:true})
    having?: DeliveryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeliveryCountAggregateInput, {nullable:true})
    _count?: DeliveryCountAggregateInput;

    @Field(() => DeliveryMinAggregateInput, {nullable:true})
    _min?: DeliveryMinAggregateInput;

    @Field(() => DeliveryMaxAggregateInput, {nullable:true})
    _max?: DeliveryMaxAggregateInput;
}
