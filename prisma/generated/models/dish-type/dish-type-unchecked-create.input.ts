import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeUncheckedCreateNestedManyWithoutDishTypeInput } from '../recipe/recipe-unchecked-create-nested-many-without-dish-type.input';
import { Type } from 'class-transformer';

@InputType()
export class DishTypeUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUncheckedCreateNestedManyWithoutDishTypeInput, {nullable:true})
    @Type(() => RecipeUncheckedCreateNestedManyWithoutDishTypeInput)
    recipes?: RecipeUncheckedCreateNestedManyWithoutDishTypeInput;
}
