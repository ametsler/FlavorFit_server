import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRecipeViewInput } from './user-update-without-recipe-view.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecipeViewInput } from './user-create-without-recipe-view.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRecipeViewInput {

    @Field(() => UserUpdateWithoutRecipeViewInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipeViewInput)
    update!: UserUpdateWithoutRecipeViewInput;

    @Field(() => UserCreateWithoutRecipeViewInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipeViewInput)
    create!: UserCreateWithoutRecipeViewInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
