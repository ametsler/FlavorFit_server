import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTypeCreateWithoutRecipesInput } from './dish-type-create-without-recipes.input';
import { Type } from 'class-transformer';
import { DishTypeCreateOrConnectWithoutRecipesInput } from './dish-type-create-or-connect-without-recipes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { DishTypeWhereUniqueInput } from './dish-type-where-unique.input';

@InputType()
export class DishTypeCreateNestedOneWithoutRecipesInput {

    @Field(() => DishTypeCreateWithoutRecipesInput, {nullable:true})
    @Type(() => DishTypeCreateWithoutRecipesInput)
    create?: DishTypeCreateWithoutRecipesInput;

    @Field(() => DishTypeCreateOrConnectWithoutRecipesInput, {nullable:true})
    @Type(() => DishTypeCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: DishTypeCreateOrConnectWithoutRecipesInput;

    @Field(() => DishTypeWhereUniqueInput, {nullable:true})
    @Type(() => DishTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<DishTypeWhereUniqueInput, 'id'>;
}
