import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BodyMeasurementMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

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

    @Field(() => SortOrder, {nullable:true})
    activityLevel?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    nutritionGoal?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    profileId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
