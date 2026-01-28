import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeliveryUpdateManyMutationInput } from './delivery-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DeliveryWhereInput } from './delivery-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyDeliveryArgs {

    @Field(() => DeliveryUpdateManyMutationInput, {nullable:false})
    @Type(() => DeliveryUpdateManyMutationInput)
    data!: DeliveryUpdateManyMutationInput;

    @Field(() => DeliveryWhereInput, {nullable:true})
    @Type(() => DeliveryWhereInput)
    where?: DeliveryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
