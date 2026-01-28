import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeliveryStatus } from './delivery-status.enum';

@InputType()
export class NestedEnumDeliveryStatusFilter {

    @Field(() => DeliveryStatus, {nullable:true})
    equals?: `${DeliveryStatus}`;

    @Field(() => [DeliveryStatus], {nullable:true})
    in?: Array<`${DeliveryStatus}`>;

    @Field(() => [DeliveryStatus], {nullable:true})
    notIn?: Array<`${DeliveryStatus}`>;

    @Field(() => NestedEnumDeliveryStatusFilter, {nullable:true})
    not?: NestedEnumDeliveryStatusFilter;
}
