import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeliveryWhereInput } from './delivery-where.input';
import { Type } from 'class-transformer';
import { DeliveryOrderByWithRelationInput } from './delivery-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { DeliveryWhereUniqueInput } from './delivery-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeliveryCountAggregateInput } from './delivery-count-aggregate.input';
import { DeliveryMinAggregateInput } from './delivery-min-aggregate.input';
import { DeliveryMaxAggregateInput } from './delivery-max-aggregate.input';

@ArgsType()
export class DeliveryAggregateArgs {

    @Field(() => DeliveryWhereInput, {nullable:true})
    @Type(() => DeliveryWhereInput)
    where?: DeliveryWhereInput;

    @Field(() => [DeliveryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeliveryOrderByWithRelationInput>;

    @Field(() => DeliveryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DeliveryWhereUniqueInput, 'id'>;

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
