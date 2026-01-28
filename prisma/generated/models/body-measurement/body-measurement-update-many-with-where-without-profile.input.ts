import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementScalarWhereInput } from './body-measurement-scalar-where.input';
import { Type } from 'class-transformer';
import { BodyMeasurementUpdateManyMutationInput } from './body-measurement-update-many-mutation.input';

@InputType()
export class BodyMeasurementUpdateManyWithWhereWithoutProfileInput {

    @Field(() => BodyMeasurementScalarWhereInput, {nullable:false})
    @Type(() => BodyMeasurementScalarWhereInput)
    where!: BodyMeasurementScalarWhereInput;

    @Field(() => BodyMeasurementUpdateManyMutationInput, {nullable:false})
    @Type(() => BodyMeasurementUpdateManyMutationInput)
    data!: BodyMeasurementUpdateManyMutationInput;
}
