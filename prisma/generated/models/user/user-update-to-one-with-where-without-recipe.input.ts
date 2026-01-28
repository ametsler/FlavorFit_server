import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRecipeInput } from './user-update-without-recipe.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRecipeInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipeInput)
    data!: UserUpdateWithoutRecipeInput;
}
