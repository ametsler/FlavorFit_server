import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BodyMeasurementSumAggregate {

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
}
