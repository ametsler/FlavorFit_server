import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOrderInput } from './user-update-without-order.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOrderInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutOrderInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrderInput)
    data!: UserUpdateWithoutOrderInput;
}
