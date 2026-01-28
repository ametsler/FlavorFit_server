import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementCreateWithoutProfileInput } from './body-measurement-create-without-profile.input';
import { Type } from 'class-transformer';
import { BodyMeasurementCreateOrConnectWithoutProfileInput } from './body-measurement-create-or-connect-without-profile.input';
import { BodyMeasurementCreateManyProfileInputEnvelope } from './body-measurement-create-many-profile-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';

@InputType()
export class BodyMeasurementUncheckedCreateNestedManyWithoutProfileInput {

    @Field(() => [BodyMeasurementCreateWithoutProfileInput], {nullable:true})
    @Type(() => BodyMeasurementCreateWithoutProfileInput)
    create?: Array<BodyMeasurementCreateWithoutProfileInput>;

    @Field(() => [BodyMeasurementCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => BodyMeasurementCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<BodyMeasurementCreateOrConnectWithoutProfileInput>;

    @Field(() => BodyMeasurementCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => BodyMeasurementCreateManyProfileInputEnvelope)
    createMany?: BodyMeasurementCreateManyProfileInputEnvelope;

    @Field(() => [BodyMeasurementWhereUniqueInput], {nullable:true})
    @Type(() => BodyMeasurementWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>>;
}
