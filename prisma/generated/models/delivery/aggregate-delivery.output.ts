import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeliveryCountAggregate } from './delivery-count-aggregate.output';
import { DeliveryMinAggregate } from './delivery-min-aggregate.output';
import { DeliveryMaxAggregate } from './delivery-max-aggregate.output';

@ObjectType()
export class AggregateDelivery {

    @Field(() => DeliveryCountAggregate, {nullable:true})
    _count?: DeliveryCountAggregate;

    @Field(() => DeliveryMinAggregate, {nullable:true})
    _min?: DeliveryMinAggregate;

    @Field(() => DeliveryMaxAggregate, {nullable:true})
    _max?: DeliveryMaxAggregate;
}
