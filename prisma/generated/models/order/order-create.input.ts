import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderItemCreateNestedManyWithoutOrderInput } from '../order-item/order-item-create-nested-many-without-order.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutOrderInput } from '../user/user-create-nested-one-without-order.input';

@InputType()
export class OrderCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutOrderInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutOrderInput)
    user!: UserCreateNestedOneWithoutOrderInput;
}
