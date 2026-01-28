import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BodyMeasurementCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

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

    @Field(() => Boolean, {nullable:true})
    activityLevel?: true;

    @Field(() => Boolean, {nullable:true})
    nutritionGoal?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    profileId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
