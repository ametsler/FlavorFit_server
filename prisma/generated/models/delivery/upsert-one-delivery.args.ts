import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { DeliveryWhereUniqueInput } from './delivery-where-unique.input';
import { Type } from 'class-transformer';
import { DeliveryCreateInput } from './delivery-create.input';
import { DeliveryUpdateInput } from './delivery-update.input';

@ArgsType()
export class UpsertOneDeliveryArgs {

    @Field(() => DeliveryWhereUniqueInput, {nullable:false})
    @Type(() => DeliveryWhereUniqueInput)
    where!: Prisma.AtLeast<DeliveryWhereUniqueInput, 'id'>;

    @Field(() => DeliveryCreateInput, {nullable:false})
    @Type(() => DeliveryCreateInput)
    create!: DeliveryCreateInput;

    @Field(() => DeliveryUpdateInput, {nullable:false})
    @Type(() => DeliveryUpdateInput)
    update!: DeliveryUpdateInput;
}
