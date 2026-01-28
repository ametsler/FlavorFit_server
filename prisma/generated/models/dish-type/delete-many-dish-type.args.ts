import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTypeWhereInput } from './dish-type-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyDishTypeArgs {

    @Field(() => DishTypeWhereInput, {nullable:true})
    @Type(() => DishTypeWhereInput)
    where?: DishTypeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
