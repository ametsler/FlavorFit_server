import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';

@InputType()
export class BodyMeasurementListRelationFilter {

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    every?: BodyMeasurementWhereInput;

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    some?: BodyMeasurementWhereInput;

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    none?: BodyMeasurementWhereInput;
}
