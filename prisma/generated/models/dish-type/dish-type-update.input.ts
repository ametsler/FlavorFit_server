import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeUpdateManyWithoutDishTypeNestedInput } from '../recipe/recipe-update-many-without-dish-type-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class DishTypeUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateManyWithoutDishTypeNestedInput, {nullable:true})
    @Type(() => RecipeUpdateManyWithoutDishTypeNestedInput)
    recipes?: RecipeUpdateManyWithoutDishTypeNestedInput;
}
