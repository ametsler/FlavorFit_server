import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRecipeLikeInput } from '../user/user-create-nested-one-without-recipe-like.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeLikeCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRecipeLikeInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutRecipeLikeInput)
    user!: UserCreateNestedOneWithoutRecipeLikeInput;
}
