import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutBodyMeasurementsInput } from './profile-create-without-body-measurements.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutBodyMeasurementsInput } from './profile-create-or-connect-without-body-measurements.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutBodyMeasurementsInput {

    @Field(() => ProfileCreateWithoutBodyMeasurementsInput, {nullable:true})
    @Type(() => ProfileCreateWithoutBodyMeasurementsInput)
    create?: ProfileCreateWithoutBodyMeasurementsInput;

    @Field(() => ProfileCreateOrConnectWithoutBodyMeasurementsInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutBodyMeasurementsInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutBodyMeasurementsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
