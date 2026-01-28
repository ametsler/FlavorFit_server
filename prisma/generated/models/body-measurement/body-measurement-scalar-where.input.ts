import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumActivityLevelNullableFilter } from '../prisma/enum-activity-level-nullable-filter.input';
import { EnumNutritionGoalNullableFilter } from '../prisma/enum-nutrition-goal-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BodyMeasurementScalarWhereInput {

    @Field(() => [BodyMeasurementScalarWhereInput], {nullable:true})
    AND?: Array<BodyMeasurementScalarWhereInput>;

    @Field(() => [BodyMeasurementScalarWhereInput], {nullable:true})
    OR?: Array<BodyMeasurementScalarWhereInput>;

    @Field(() => [BodyMeasurementScalarWhereInput], {nullable:true})
    NOT?: Array<BodyMeasurementScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    weight?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    chest?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    waist?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    thigh?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    arm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    goalWeight?: IntNullableFilter;

    @Field(() => EnumActivityLevelNullableFilter, {nullable:true})
    activityLevel?: EnumActivityLevelNullableFilter;

    @Field(() => EnumNutritionGoalNullableFilter, {nullable:true})
    nutritionGoal?: EnumNutritionGoalNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
