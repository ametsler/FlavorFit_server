import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRecipeViewInput } from '../user/user-create-nested-one-without-recipe-view.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeViewCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRecipeViewInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutRecipeViewInput)
    user!: UserCreateNestedOneWithoutRecipeViewInput;
}
