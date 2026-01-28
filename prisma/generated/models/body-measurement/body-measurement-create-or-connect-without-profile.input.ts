import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { Type } from 'class-transformer';
import { BodyMeasurementCreateWithoutProfileInput } from './body-measurement-create-without-profile.input';

@InputType()
export class BodyMeasurementCreateOrConnectWithoutProfileInput {

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:false})
    @Type(() => BodyMeasurementWhereUniqueInput)
    where!: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => BodyMeasurementCreateWithoutProfileInput, {nullable:false})
    @Type(() => BodyMeasurementCreateWithoutProfileInput)
    create!: BodyMeasurementCreateWithoutProfileInput;
}
