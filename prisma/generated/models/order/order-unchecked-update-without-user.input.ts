import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderItemUncheckedUpdateManyWithoutOrderNestedInput } from '../order-item/order-item-unchecked-update-many-without-order-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderUncheckedUpdateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => OrderStatus, {nullable:true})
    status?: `${OrderStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    @Type(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInput)
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
}
