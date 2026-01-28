import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderItemUpdateManyWithoutOrderNestedInput } from '../order-item/order-item-update-many-without-order-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutOrderNestedInput } from '../user/user-update-one-required-without-order-nested.input';

@InputType()
export class OrderUpdateInput {

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

    @Field(() => OrderItemUpdateManyWithoutOrderNestedInput, {nullable:true})
    @Type(() => OrderItemUpdateManyWithoutOrderNestedInput)
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutOrderNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutOrderNestedInput)
    user?: UserUpdateOneRequiredWithoutOrderNestedInput;
}
