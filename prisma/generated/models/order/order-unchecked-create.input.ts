import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInput } from '../order-item/order-item-unchecked-create-nested-many-without-order.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => OrderStatus, {nullable:true})
    status?: `${OrderStatus}`;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    @Type(() => OrderItemUncheckedCreateNestedManyWithoutOrderInput)
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput;
}
