import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { UserUpdateOneRequiredWithoutOrderNestedInput } from '../user/user-update-one-required-without-order-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderUpdateWithoutOrderItemsInput {

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

    @Field(() => UserUpdateOneRequiredWithoutOrderNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutOrderNestedInput)
    user?: UserUpdateOneRequiredWithoutOrderNestedInput;
}
