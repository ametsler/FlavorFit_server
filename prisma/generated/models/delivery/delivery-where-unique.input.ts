import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeliveryWhereInput } from './delivery-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDeliveryStatusFilter } from '../prisma/enum-delivery-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DeliveryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [DeliveryWhereInput], {nullable:true})
    AND?: Array<DeliveryWhereInput>;

    @Field(() => [DeliveryWhereInput], {nullable:true})
    OR?: Array<DeliveryWhereInput>;

    @Field(() => [DeliveryWhereInput], {nullable:true})
    NOT?: Array<DeliveryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => EnumDeliveryStatusFilter, {nullable:true})
    status?: EnumDeliveryStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
