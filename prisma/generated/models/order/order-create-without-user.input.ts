import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderItemCreateNestedManyWithoutOrderInput } from '../order-item/order-item-create-nested-many-without-order.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => OrderStatus, {nullable:true})
    status?: `${OrderStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemCreateNestedManyWithoutOrderInput, {nullable:true})
    @Type(() => OrderItemCreateNestedManyWithoutOrderInput)
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput;
}
