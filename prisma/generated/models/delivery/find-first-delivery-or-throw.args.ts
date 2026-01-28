import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeliveryWhereInput } from './delivery-where.input';
import { Type } from 'class-transformer';
import { DeliveryOrderByWithRelationInput } from './delivery-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { DeliveryWhereUniqueInput } from './delivery-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeliveryScalarFieldEnum } from './delivery-scalar-field.enum';

@ArgsType()
export class FindFirstDeliveryOrThrowArgs {

    @Field(() => DeliveryWhereInput, {nullable:true})
    @Type(() => DeliveryWhereInput)
    where?: DeliveryWhereInput;

    @Field(() => [DeliveryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeliveryOrderByWithRelationInput>;

    @Field(() => DeliveryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DeliveryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeliveryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${DeliveryScalarFieldEnum}`>;
}
