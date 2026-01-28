import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOrderInput } from './user-create-without-order.input';

@InputType()
export class UserCreateOrConnectWithoutOrderInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutOrderInput, {nullable:false})
    @Type(() => UserCreateWithoutOrderInput)
    create!: UserCreateWithoutOrderInput;
}
