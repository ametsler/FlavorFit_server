import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BodyMeasurementAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    height?: true;

    @Field(() => Boolean, {nullable:true})
    weight?: true;

    @Field(() => Boolean, {nullable:true})
    chest?: true;

    @Field(() => Boolean, {nullable:true})
    waist?: true;

    @Field(() => Boolean, {nullable:true})
    thigh?: true;

    @Field(() => Boolean, {nullable:true})
    arm?: true;

    @Field(() => Boolean, {nullable:true})
    goalWeight?: true;
}
