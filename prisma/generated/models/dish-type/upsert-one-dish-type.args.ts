import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { DishTypeWhereUniqueInput } from './dish-type-where-unique.input';
import { Type } from 'class-transformer';
import { DishTypeCreateInput } from './dish-type-create.input';
import { DishTypeUpdateInput } from './dish-type-update.input';

@ArgsType()
export class UpsertOneDishTypeArgs {

    @Field(() => DishTypeWhereUniqueInput, {nullable:false})
    @Type(() => DishTypeWhereUniqueInput)
    where!: Prisma.AtLeast<DishTypeWhereUniqueInput, 'id'>;

    @Field(() => DishTypeCreateInput, {nullable:false})
    @Type(() => DishTypeCreateInput)
    create!: DishTypeCreateInput;

    @Field(() => DishTypeUpdateInput, {nullable:false})
    @Type(() => DishTypeUpdateInput)
    update!: DishTypeUpdateInput;
}
