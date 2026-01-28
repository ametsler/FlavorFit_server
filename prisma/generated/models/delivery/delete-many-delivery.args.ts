import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeliveryWhereInput } from './delivery-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyDeliveryArgs {

    @Field(() => DeliveryWhereInput, {nullable:true})
    @Type(() => DeliveryWhereInput)
    where?: DeliveryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
