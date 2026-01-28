import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDeliveryStatusWithAggregatesFilter } from '../prisma/enum-delivery-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DeliveryScalarWhereWithAggregatesInput {

    @Field(() => [DeliveryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeliveryScalarWhereWithAggregatesInput>;

    @Field(() => [DeliveryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeliveryScalarWhereWithAggregatesInput>;

    @Field(() => [DeliveryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeliveryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: StringWithAggregatesFilter;

    @Field(() => EnumDeliveryStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDeliveryStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
