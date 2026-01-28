import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTypeCreateManyInput } from './dish-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDishTypeArgs {

    @Field(() => [DishTypeCreateManyInput], {nullable:false})
    @Type(() => DishTypeCreateManyInput)
    data!: Array<DishTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
