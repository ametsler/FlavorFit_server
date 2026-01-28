import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementCreateWithoutProfileInput } from './body-measurement-create-without-profile.input';
import { Type } from 'class-transformer';
import { BodyMeasurementCreateOrConnectWithoutProfileInput } from './body-measurement-create-or-connect-without-profile.input';
import { BodyMeasurementUpsertWithWhereUniqueWithoutProfileInput } from './body-measurement-upsert-with-where-unique-without-profile.input';
import { BodyMeasurementCreateManyProfileInputEnvelope } from './body-measurement-create-many-profile-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { BodyMeasurementUpdateWithWhereUniqueWithoutProfileInput } from './body-measurement-update-with-where-unique-without-profile.input';
import { BodyMeasurementUpdateManyWithWhereWithoutProfileInput } from './body-measurement-update-many-with-where-without-profile.input';
import { BodyMeasurementScalarWhereInput } from './body-measurement-scalar-where.input';

@InputType()
export class BodyMeasurementUpdateManyWithoutProfileNestedInput {

    @Field(() => [BodyMeasurementCreateWithoutProfileInput], {nullable:true})
    @Type(() => BodyMeasurementCreateWithoutProfileInput)
    create?: Array<BodyMeasurementCreateWithoutProfileInput>;

    @Field(() => [BodyMeasurementCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => BodyMeasurementCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<BodyMeasurementCreateOrConnectWithoutProfileInput>;

    @Field(() => [BodyMeasurementUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => BodyMeasurementUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<BodyMeasurementUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => BodyMeasurementCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => BodyMeasurementCreateManyProfileInputEnvelope)
    createMany?: BodyMeasurementCreateManyProfileInputEnvelope;

    @Field(() => [BodyMeasurementWhereUniqueInput], {nullable:true})
    @Type(() => BodyMeasurementWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [BodyMeasurementWhereUniqueInput], {nullable:true})
    @Type(() => BodyMeasurementWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [BodyMeasurementWhereUniqueInput], {nullable:true})
    @Type(() => BodyMeasurementWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [BodyMeasurementWhereUniqueInput], {nullable:true})
    @Type(() => BodyMeasurementWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [BodyMeasurementUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => BodyMeasurementUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<BodyMeasurementUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [BodyMeasurementUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => BodyMeasurementUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<BodyMeasurementUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [BodyMeasurementScalarWhereInput], {nullable:true})
    @Type(() => BodyMeasurementScalarWhereInput)
    deleteMany?: Array<BodyMeasurementScalarWhereInput>;
}
