import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRecipeInput } from './user-update-without-recipe.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecipeInput } from './user-create-without-recipe.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRecipeInput {

    @Field(() => UserUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipeInput)
    update!: UserUpdateWithoutRecipeInput;

    @Field(() => UserCreateWithoutRecipeInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipeInput)
    create!: UserCreateWithoutRecipeInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
