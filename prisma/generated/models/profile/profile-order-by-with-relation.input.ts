import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BodyMeasurementOrderByRelationAggregateInput } from '../body-measurement/body-measurement-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fullName?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    gender?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    age?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bio?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    photo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contact?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => BodyMeasurementOrderByRelationAggregateInput, {nullable:true})
    bodyMeasurements?: BodyMeasurementOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;
}
