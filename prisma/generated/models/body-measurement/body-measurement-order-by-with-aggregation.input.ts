import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BodyMeasurementCountOrderByAggregateInput } from './body-measurement-count-order-by-aggregate.input';
import { BodyMeasurementAvgOrderByAggregateInput } from './body-measurement-avg-order-by-aggregate.input';
import { BodyMeasurementMaxOrderByAggregateInput } from './body-measurement-max-order-by-aggregate.input';
import { BodyMeasurementMinOrderByAggregateInput } from './body-measurement-min-order-by-aggregate.input';
import { BodyMeasurementSumOrderByAggregateInput } from './body-measurement-sum-order-by-aggregate.input';

@InputType()
export class BodyMeasurementOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    height?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    weight?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    chest?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    waist?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    thigh?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    arm?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    goalWeight?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    activityLevel?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    nutritionGoal?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    profileId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => BodyMeasurementCountOrderByAggregateInput, {nullable:true})
    _count?: BodyMeasurementCountOrderByAggregateInput;

    @Field(() => BodyMeasurementAvgOrderByAggregateInput, {nullable:true})
    _avg?: BodyMeasurementAvgOrderByAggregateInput;

    @Field(() => BodyMeasurementMaxOrderByAggregateInput, {nullable:true})
    _max?: BodyMeasurementMaxOrderByAggregateInput;

    @Field(() => BodyMeasurementMinOrderByAggregateInput, {nullable:true})
    _min?: BodyMeasurementMinOrderByAggregateInput;

    @Field(() => BodyMeasurementSumOrderByAggregateInput, {nullable:true})
    _sum?: BodyMeasurementSumOrderByAggregateInput;
}
