import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';

@InputType()
export class BodyMeasurementOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;
}
