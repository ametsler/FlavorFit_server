import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderItemListRelationFilter } from '../order-item/order-item-list-relation-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';
import { IngredientScalarRelationFilter } from '../ingredient/ingredient-scalar-relation-filter.input';

@InputType()
export class RecipeIngredientWhereInput {

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    AND?: Array<RecipeIngredientWhereInput>;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    OR?: Array<RecipeIngredientWhereInput>;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    NOT?: Array<RecipeIngredientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    quantity?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ingredientId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrderItemListRelationFilter, {nullable:true})
    @Type(() => OrderItemListRelationFilter)
    OrderItem?: OrderItemListRelationFilter;

    @Field(() => RecipeScalarRelationFilter, {nullable:true})
    @Type(() => RecipeScalarRelationFilter)
    recipe?: RecipeScalarRelationFilter;

    @Field(() => IngredientScalarRelationFilter, {nullable:true})
    @Type(() => IngredientScalarRelationFilter)
    ingredient?: IngredientScalarRelationFilter;
}
