import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRecipeLikeInput } from './user-update-without-recipe-like.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRecipeLikeInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRecipeLikeInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipeLikeInput)
    data!: UserUpdateWithoutRecipeLikeInput;
}
