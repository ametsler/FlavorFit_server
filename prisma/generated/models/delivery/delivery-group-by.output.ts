import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeliveryStatus } from '../prisma/delivery-status.enum';
import { DeliveryCountAggregate } from './delivery-count-aggregate.output';
import { DeliveryMinAggregate } from './delivery-min-aggregate.output';
import { DeliveryMaxAggregate } from './delivery-max-aggregate.output';

@ObjectType()
export class DeliveryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => DeliveryStatus, {nullable:false})
    status!: `${DeliveryStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DeliveryCountAggregate, {nullable:true})
    _count?: DeliveryCountAggregate;

    @Field(() => DeliveryMinAggregate, {nullable:true})
    _min?: DeliveryMinAggregate;

    @Field(() => DeliveryMaxAggregate, {nullable:true})
    _max?: DeliveryMaxAggregate;
}
