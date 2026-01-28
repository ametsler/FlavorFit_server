import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BodyMeasurementCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Int, {nullable:false})
    weight!: number;

    @Field(() => Int, {nullable:false})
    chest!: number;

    @Field(() => Int, {nullable:false})
    waist!: number;

    @Field(() => Int, {nullable:false})
    thigh!: number;

    @Field(() => Int, {nullable:false})
    arm!: number;

    @Field(() => Int, {nullable:false})
    goalWeight!: number;

    @Field(() => Int, {nullable:false})
    activityLevel!: number;

    @Field(() => Int, {nullable:false})
    nutritionGoal!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
