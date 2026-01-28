import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { DishTypeWhereUniqueInput } from './dish-type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDishTypeArgs {

    @Field(() => DishTypeWhereUniqueInput, {nullable:false})
    @Type(() => DishTypeWhereUniqueInput)
    where!: Prisma.AtLeast<DishTypeWhereUniqueInput, 'id'>;
}
