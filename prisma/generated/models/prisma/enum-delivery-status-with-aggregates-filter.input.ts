import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeliveryStatus } from './delivery-status.enum';
import { NestedEnumDeliveryStatusWithAggregatesFilter } from './nested-enum-delivery-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDeliveryStatusFilter } from './nested-enum-delivery-status-filter.input';

@InputType()
export class EnumDeliveryStatusWithAggregatesFilter {

    @Field(() => DeliveryStatus, {nullable:true})
    equals?: `${DeliveryStatus}`;

    @Field(() => [DeliveryStatus], {nullable:true})
    in?: Array<`${DeliveryStatus}`>;

    @Field(() => [DeliveryStatus], {nullable:true})
    notIn?: Array<`${DeliveryStatus}`>;

    @Field(() => NestedEnumDeliveryStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDeliveryStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDeliveryStatusFilter, {nullable:true})
    _min?: NestedEnumDeliveryStatusFilter;

    @Field(() => NestedEnumDeliveryStatusFilter, {nullable:true})
    _max?: NestedEnumDeliveryStatusFilter;
}
