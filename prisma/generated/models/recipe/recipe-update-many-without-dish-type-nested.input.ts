import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutDishTypeInput } from './recipe-create-without-dish-type.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutDishTypeInput } from './recipe-create-or-connect-without-dish-type.input';
import { RecipeUpsertWithWhereUniqueWithoutDishTypeInput } from './recipe-upsert-with-where-unique-without-dish-type.input';
import { RecipeCreateManyDishTypeInputEnvelope } from './recipe-create-many-dish-type-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutDishTypeInput } from './recipe-update-with-where-unique-without-dish-type.input';
import { RecipeUpdateManyWithWhereWithoutDishTypeInput } from './recipe-update-many-with-where-without-dish-type.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';

@InputType()
export class RecipeUpdateManyWithoutDishTypeNestedInput {

    @Field(() => [RecipeCreateWithoutDishTypeInput], {nullable:true})
    @Type(() => RecipeCreateWithoutDishTypeInput)
    create?: Array<RecipeCreateWithoutDishTypeInput>;

    @Field(() => [RecipeCreateOrConnectWithoutDishTypeInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutDishTypeInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutDishTypeInput>;

    @Field(() => [RecipeUpsertWithWhereUniqueWithoutDishTypeInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutDishTypeInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutDishTypeInput>;

    @Field(() => RecipeCreateManyDishTypeInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyDishTypeInputEnvelope)
    createMany?: RecipeCreateManyDishTypeInputEnvelope;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeUpdateWithWhereUniqueWithoutDishTypeInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutDishTypeInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutDishTypeInput>;

    @Field(() => [RecipeUpdateManyWithWhereWithoutDishTypeInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutDishTypeInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutDishTypeInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}
