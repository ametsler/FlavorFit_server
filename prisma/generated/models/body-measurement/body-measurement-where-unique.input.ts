import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumActivityLevelNullableFilter } from '../prisma/enum-activity-level-nullable-filter.input';
import { EnumNutritionGoalNullableFilter } from '../prisma/enum-nutrition-goal-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { ProfileNullableScalarRelationFilter } from '../profile/profile-nullable-scalar-relation-filter.input';

@InputType()
export class BodyMeasurementWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    AND?: Array<BodyMeasurementWhereInput>;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    OR?: Array<BodyMeasurementWhereInput>;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    NOT?: Array<BodyMeasurementWhereInput>;

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

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    profile?: ProfileNullableScalarRelationFilter;
}
