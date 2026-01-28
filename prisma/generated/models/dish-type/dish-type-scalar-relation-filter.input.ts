import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTypeWhereInput } from './dish-type-where.input';

@InputType()
export class DishTypeScalarRelationFilter {

    @Field(() => DishTypeWhereInput, {nullable:true})
    is?: DishTypeWhereInput;

    @Field(() => DishTypeWhereInput, {nullable:true})
    isNot?: DishTypeWhereInput;
}
