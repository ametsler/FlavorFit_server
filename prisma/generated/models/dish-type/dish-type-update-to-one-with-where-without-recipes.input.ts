import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTypeWhereInput } from './dish-type-where.input';
import { Type } from 'class-transformer';
import { DishTypeUpdateWithoutRecipesInput } from './dish-type-update-without-recipes.input';

@InputType()
export class DishTypeUpdateToOneWithWhereWithoutRecipesInput {

    @Field(() => DishTypeWhereInput, {nullable:true})
    @Type(() => DishTypeWhereInput)
    where?: DishTypeWhereInput;

    @Field(() => DishTypeUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => DishTypeUpdateWithoutRecipesInput)
    data!: DishTypeUpdateWithoutRecipesInput;
}
