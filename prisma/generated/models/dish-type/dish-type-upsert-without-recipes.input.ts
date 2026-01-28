import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTypeUpdateWithoutRecipesInput } from './dish-type-update-without-recipes.input';
import { Type } from 'class-transformer';
import { DishTypeCreateWithoutRecipesInput } from './dish-type-create-without-recipes.input';
import { DishTypeWhereInput } from './dish-type-where.input';

@InputType()
export class DishTypeUpsertWithoutRecipesInput {

    @Field(() => DishTypeUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => DishTypeUpdateWithoutRecipesInput)
    update!: DishTypeUpdateWithoutRecipesInput;

    @Field(() => DishTypeCreateWithoutRecipesInput, {nullable:false})
    @Type(() => DishTypeCreateWithoutRecipesInput)
    create!: DishTypeCreateWithoutRecipesInput;

    @Field(() => DishTypeWhereInput, {nullable:true})
    @Type(() => DishTypeWhereInput)
    where?: DishTypeWhereInput;
}
