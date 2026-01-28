import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTypeUpdateInput } from './dish-type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { DishTypeWhereUniqueInput } from './dish-type-where-unique.input';

@ArgsType()
export class UpdateOneDishTypeArgs {

    @Field(() => DishTypeUpdateInput, {nullable:false})
    @Type(() => DishTypeUpdateInput)
    data!: DishTypeUpdateInput;

    @Field(() => DishTypeWhereUniqueInput, {nullable:false})
    @Type(() => DishTypeWhereUniqueInput)
    where!: Prisma.AtLeast<DishTypeWhereUniqueInput, 'id'>;
}
