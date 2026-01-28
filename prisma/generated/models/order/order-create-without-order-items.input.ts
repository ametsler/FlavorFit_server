import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { UserCreateNestedOneWithoutOrderInput } from '../user/user-create-nested-one-without-order.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderCreateWithoutOrderItemsInput {

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

    @Field(() => UserCreateNestedOneWithoutOrderInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutOrderInput)
    user!: UserCreateNestedOneWithoutOrderInput;
}
