import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRecipeLikeInput } from './user-update-without-recipe-like.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecipeLikeInput } from './user-create-without-recipe-like.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRecipeLikeInput {

    @Field(() => UserUpdateWithoutRecipeLikeInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipeLikeInput)
    update!: UserUpdateWithoutRecipeLikeInput;

    @Field(() => UserCreateWithoutRecipeLikeInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipeLikeInput)
    create!: UserCreateWithoutRecipeLikeInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
