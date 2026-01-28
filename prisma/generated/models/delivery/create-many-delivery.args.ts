import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeliveryCreateManyInput } from './delivery-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDeliveryArgs {

    @Field(() => [DeliveryCreateManyInput], {nullable:false})
    @Type(() => DeliveryCreateManyInput)
    data!: Array<DeliveryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
