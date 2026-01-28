import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTypeCreateInput } from './dish-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDishTypeArgs {

    @Field(() => DishTypeCreateInput, {nullable:false})
    @Type(() => DishTypeCreateInput)
    data!: DishTypeCreateInput;
}
