import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTypeWhereInput } from './dish-type-where.input';
import { Type } from 'class-transformer';
import { DishTypeOrderByWithRelationInput } from './dish-type-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { DishTypeWhereUniqueInput } from './dish-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DishTypeScalarFieldEnum } from './dish-type-scalar-field.enum';

@ArgsType()
export class FindFirstDishTypeArgs {

    @Field(() => DishTypeWhereInput, {nullable:true})
    @Type(() => DishTypeWhereInput)
    where?: DishTypeWhereInput;

    @Field(() => [DishTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DishTypeOrderByWithRelationInput>;

    @Field(() => DishTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DishTypeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DishTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${DishTypeScalarFieldEnum}`>;
}
