import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutDishTypeInput } from './recipe-create-without-dish-type.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutDishTypeInput } from './recipe-create-or-connect-without-dish-type.input';
import { RecipeCreateManyDishTypeInputEnvelope } from './recipe-create-many-dish-type-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutDishTypeInput {

    @Field(() => [RecipeCreateWithoutDishTypeInput], {nullable:true})
    @Type(() => RecipeCreateWithoutDishTypeInput)
    create?: Array<RecipeCreateWithoutDishTypeInput>;

    @Field(() => [RecipeCreateOrConnectWithoutDishTypeInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutDishTypeInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutDishTypeInput>;

    @Field(() => RecipeCreateManyDishTypeInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyDishTypeInputEnvelope)
    createMany?: RecipeCreateManyDishTypeInputEnvelope;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}
