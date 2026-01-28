import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { DishTypeWhereUniqueInput } from './dish-type-where-unique.input';
import { Type } from 'class-transformer';
import { DishTypeCreateWithoutRecipesInput } from './dish-type-create-without-recipes.input';

@InputType()
export class DishTypeCreateOrConnectWithoutRecipesInput {

    @Field(() => DishTypeWhereUniqueInput, {nullable:false})
    @Type(() => DishTypeWhereUniqueInput)
    where!: Prisma.AtLeast<DishTypeWhereUniqueInput, 'id'>;

    @Field(() => DishTypeCreateWithoutRecipesInput, {nullable:false})
    @Type(() => DishTypeCreateWithoutRecipesInput)
    create!: DishTypeCreateWithoutRecipesInput;
}
