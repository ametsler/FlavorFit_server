import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeliveryUpdateInput } from './delivery-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { DeliveryWhereUniqueInput } from './delivery-where-unique.input';

@ArgsType()
export class UpdateOneDeliveryArgs {

    @Field(() => DeliveryUpdateInput, {nullable:false})
    @Type(() => DeliveryUpdateInput)
    data!: DeliveryUpdateInput;

    @Field(() => DeliveryWhereUniqueInput, {nullable:false})
    @Type(() => DeliveryWhereUniqueInput)
    where!: Prisma.AtLeast<DeliveryWhereUniqueInput, 'id'>;
}
