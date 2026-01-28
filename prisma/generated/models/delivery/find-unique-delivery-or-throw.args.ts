import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { DeliveryWhereUniqueInput } from './delivery-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDeliveryOrThrowArgs {

    @Field(() => DeliveryWhereUniqueInput, {nullable:false})
    @Type(() => DeliveryWhereUniqueInput)
    where!: Prisma.AtLeast<DeliveryWhereUniqueInput, 'id'>;
}
