import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { Type } from 'class-transformer';
import { BodyMeasurementUpdateWithoutProfileInput } from './body-measurement-update-without-profile.input';

@InputType()
export class BodyMeasurementUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:false})
    @Type(() => BodyMeasurementWhereUniqueInput)
    where!: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => BodyMeasurementUpdateWithoutProfileInput, {nullable:false})
    @Type(() => BodyMeasurementUpdateWithoutProfileInput)
    data!: BodyMeasurementUpdateWithoutProfileInput;
}
