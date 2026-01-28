import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTypeUpdateManyMutationInput } from './dish-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DishTypeWhereInput } from './dish-type-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyDishTypeArgs {

    @Field(() => DishTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => DishTypeUpdateManyMutationInput)
    data!: DishTypeUpdateManyMutationInput;

    @Field(() => DishTypeWhereInput, {nullable:true})
    @Type(() => DishTypeWhereInput)
    where?: DishTypeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
