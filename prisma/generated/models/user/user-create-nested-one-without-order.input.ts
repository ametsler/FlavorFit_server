import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrderInput } from './user-create-without-order.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOrderInput } from './user-create-or-connect-without-order.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOrderInput {

    @Field(() => UserCreateWithoutOrderInput, {nullable:true})
    @Type(() => UserCreateWithoutOrderInput)
    create?: UserCreateWithoutOrderInput;

    @Field(() => UserCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOrderInput)
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
