import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrderInput } from './user-create-without-order.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOrderInput } from './user-create-or-connect-without-order.input';
import { UserUpsertWithoutOrderInput } from './user-upsert-without-order.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutOrderInput } from './user-update-to-one-with-where-without-order.input';

@InputType()
export class UserUpdateOneRequiredWithoutOrderNestedInput {

    @Field(() => UserCreateWithoutOrderInput, {nullable:true})
    @Type(() => UserCreateWithoutOrderInput)
    create?: UserCreateWithoutOrderInput;

    @Field(() => UserCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOrderInput)
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput;

    @Field(() => UserUpsertWithoutOrderInput, {nullable:true})
    @Type(() => UserUpsertWithoutOrderInput)
    upsert?: UserUpsertWithoutOrderInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutOrderInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutOrderInput)
    update?: UserUpdateToOneWithWhereWithoutOrderInput;
}
