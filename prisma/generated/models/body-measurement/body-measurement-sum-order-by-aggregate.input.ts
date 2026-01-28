import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BodyMeasurementSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    height?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    weight?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    chest?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    waist?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    thigh?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    arm?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    goalWeight?: `${SortOrder}`;
}
