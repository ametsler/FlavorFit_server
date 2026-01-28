import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutBodyMeasurementsInput } from './profile-create-without-body-measurements.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutBodyMeasurementsInput } from './profile-create-or-connect-without-body-measurements.input';
import { ProfileUpsertWithoutBodyMeasurementsInput } from './profile-upsert-without-body-measurements.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutBodyMeasurementsInput } from './profile-update-to-one-with-where-without-body-measurements.input';

@InputType()
export class ProfileUpdateOneWithoutBodyMeasurementsNestedInput {

    @Field(() => ProfileCreateWithoutBodyMeasurementsInput, {nullable:true})
    @Type(() => ProfileCreateWithoutBodyMeasurementsInput)
    create?: ProfileCreateWithoutBodyMeasurementsInput;

    @Field(() => ProfileCreateOrConnectWithoutBodyMeasurementsInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutBodyMeasurementsInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutBodyMeasurementsInput;

    @Field(() => ProfileUpsertWithoutBodyMeasurementsInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutBodyMeasurementsInput)
    upsert?: ProfileUpsertWithoutBodyMeasurementsInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutBodyMeasurementsInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutBodyMeasurementsInput)
    update?: ProfileUpdateToOneWithWhereWithoutBodyMeasurementsInput;
}
