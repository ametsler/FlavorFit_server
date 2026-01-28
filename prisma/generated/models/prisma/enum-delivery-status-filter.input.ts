import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeliveryStatus } from './delivery-status.enum';
import { NestedEnumDeliveryStatusFilter } from './nested-enum-delivery-status-filter.input';

@InputType()
export class EnumDeliveryStatusFilter {

    @Field(() => DeliveryStatus, {nullable:true})
    equals?: `${DeliveryStatus}`;

    @Field(() => [DeliveryStatus], {nullable:true})
    in?: Array<`${DeliveryStatus}`>;

    @Field(() => [DeliveryStatus], {nullable:true})
    notIn?: Array<`${DeliveryStatus}`>;

    @Field(() => NestedEnumDeliveryStatusFilter, {nullable:true})
    not?: NestedEnumDeliveryStatusFilter;
}
