import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeliveryCreateInput } from './delivery-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDeliveryArgs {

    @Field(() => DeliveryCreateInput, {nullable:false})
    @Type(() => DeliveryCreateInput)
    data!: DeliveryCreateInput;
}
