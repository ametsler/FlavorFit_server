import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementCreateManyProfileInput } from './body-measurement-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class BodyMeasurementCreateManyProfileInputEnvelope {

    @Field(() => [BodyMeasurementCreateManyProfileInput], {nullable:false})
    @Type(() => BodyMeasurementCreateManyProfileInput)
    data!: Array<BodyMeasurementCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
