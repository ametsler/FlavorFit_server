import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRecipeViewInput } from './user-update-without-recipe-view.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRecipeViewInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRecipeViewInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipeViewInput)
    data!: UserUpdateWithoutRecipeViewInput;
}
