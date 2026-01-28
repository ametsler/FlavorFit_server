import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecipeLikeInput } from './user-create-without-recipe-like.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRecipeLikeInput } from './user-create-or-connect-without-recipe-like.input';
import { UserUpsertWithoutRecipeLikeInput } from './user-upsert-without-recipe-like.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRecipeLikeInput } from './user-update-to-one-with-where-without-recipe-like.input';

@InputType()
export class UserUpdateOneRequiredWithoutRecipeLikeNestedInput {

    @Field(() => UserCreateWithoutRecipeLikeInput, {nullable:true})
    @Type(() => UserCreateWithoutRecipeLikeInput)
    create?: UserCreateWithoutRecipeLikeInput;

    @Field(() => UserCreateOrConnectWithoutRecipeLikeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecipeLikeInput)
    connectOrCreate?: UserCreateOrConnectWithoutRecipeLikeInput;

    @Field(() => UserUpsertWithoutRecipeLikeInput, {nullable:true})
    @Type(() => UserUpsertWithoutRecipeLikeInput)
    upsert?: UserUpsertWithoutRecipeLikeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRecipeLikeInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRecipeLikeInput)
    update?: UserUpdateToOneWithWhereWithoutRecipeLikeInput;
}
