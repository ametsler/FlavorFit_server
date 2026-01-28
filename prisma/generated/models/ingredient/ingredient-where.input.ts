import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumUnitFilter } from '../prisma/enum-unit-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';
import { OrderItemListRelationFilter } from '../order-item/order-item-list-relation-filter.input';

@InputType()
export class IngredientWhereInput {

    @Field(() => [IngredientWhereInput], {nullable:true})
    @Type(() => IngredientWhereInput)
    AND?: Array<IngredientWhereInput>;

    @Field(() => [IngredientWhereInput], {nullable:true})
    @Type(() => IngredientWhereInput)
    OR?: Array<IngredientWhereInput>;

    @Field(() => [IngredientWhereInput], {nullable:true})
    @Type(() => IngredientWhereInput)
    NOT?: Array<IngredientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    iconUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumUnitFilter, {nullable:true})
    unit?: EnumUnitFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    @Type(() => RecipeIngredientListRelationFilter)
    recipes?: RecipeIngredientListRelationFilter;

    @Field(() => OrderItemListRelationFilter, {nullable:true})
    @Type(() => OrderItemListRelationFilter)
    orderItems?: OrderItemListRelationFilter;
}
