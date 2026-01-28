import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutBodyMeasurementsInput } from './profile-update-without-body-measurements.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutBodyMeasurementsInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutBodyMeasurementsInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutBodyMeasurementsInput)
    data!: ProfileUpdateWithoutBodyMeasurementsInput;
}
