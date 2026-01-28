import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActivityLevel } from '../prisma/activity-level.enum';
import { NutritionGoal } from '../prisma/nutrition-goal.enum';
import { UserCreateNestedOneWithoutBodyMeasurementInput } from '../user/user-create-nested-one-without-body-measurement.input';
import { Type } from 'class-transformer';
import { ProfileCreateNestedOneWithoutBodyMeasurementsInput } from '../profile/profile-create-nested-one-without-body-measurements.input';

@InputType()
export class BodyMeasurementCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Int, {nullable:true})
    weight?: number;

    @Field(() => Int, {nullable:true})
    chest?: number;

    @Field(() => Int, {nullable:true})
    waist?: number;

    @Field(() => Int, {nullable:true})
    thigh?: number;

    @Field(() => Int, {nullable:true})
    arm?: number;

    @Field(() => Int, {nullable:true})
    goalWeight?: number;

    @Field(() => ActivityLevel, {nullable:true})
    activityLevel?: `${ActivityLevel}`;

    @Field(() => NutritionGoal, {nullable:true})
    nutritionGoal?: `${NutritionGoal}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBodyMeasurementInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutBodyMeasurementInput)
    user!: UserCreateNestedOneWithoutBodyMeasurementInput;

    @Field(() => ProfileCreateNestedOneWithoutBodyMeasurementsInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutBodyMeasurementsInput;
}
