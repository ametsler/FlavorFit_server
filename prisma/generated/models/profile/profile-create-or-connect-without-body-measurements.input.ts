import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutBodyMeasurementsInput } from './profile-create-without-body-measurements.input';

@InputType()
export class ProfileCreateOrConnectWithoutBodyMeasurementsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutBodyMeasurementsInput, {nullable:false})
    @Type(() => ProfileCreateWithoutBodyMeasurementsInput)
    create!: ProfileCreateWithoutBodyMeasurementsInput;
}
