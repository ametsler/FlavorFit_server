import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutBodyMeasurementsInput } from './profile-update-without-body-measurements.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutBodyMeasurementsInput } from './profile-create-without-body-measurements.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutBodyMeasurementsInput {

    @Field(() => ProfileUpdateWithoutBodyMeasurementsInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutBodyMeasurementsInput)
    update!: ProfileUpdateWithoutBodyMeasurementsInput;

    @Field(() => ProfileCreateWithoutBodyMeasurementsInput, {nullable:false})
    @Type(() => ProfileCreateWithoutBodyMeasurementsInput)
    create!: ProfileCreateWithoutBodyMeasurementsInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
