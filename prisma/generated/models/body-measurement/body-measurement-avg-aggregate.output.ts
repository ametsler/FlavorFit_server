import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BodyMeasurementAvgAggregate {

    @Field(() => Float, {nullable:true})
    height?: number;

    @Field(() => Float, {nullable:true})
    weight?: number;

    @Field(() => Float, {nullable:true})
    chest?: number;

    @Field(() => Float, {nullable:true})
    waist?: number;

    @Field(() => Float, {nullable:true})
    thigh?: number;

    @Field(() => Float, {nullable:true})
    arm?: number;

    @Field(() => Float, {nullable:true})
    goalWeight?: number;
}
