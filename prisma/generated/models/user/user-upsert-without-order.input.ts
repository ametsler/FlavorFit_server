import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOrderInput } from './user-update-without-order.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOrderInput } from './user-create-without-order.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOrderInput {

    @Field(() => UserUpdateWithoutOrderInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrderInput)
    update!: UserUpdateWithoutOrderInput;

    @Field(() => UserCreateWithoutOrderInput, {nullable:false})
    @Type(() => UserCreateWithoutOrderInput)
    create!: UserCreateWithoutOrderInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
