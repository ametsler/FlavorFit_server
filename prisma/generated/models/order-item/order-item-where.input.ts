import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeIngredientScalarRelationFilter } from '../recipe-ingredient/recipe-ingredient-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { OrderScalarRelationFilter } from '../order/order-scalar-relation-filter.input';
import { IngredientNullableScalarRelationFilter } from '../ingredient/ingredient-nullable-scalar-relation-filter.input';

@InputType()
export class OrderItemWhereInput {

    @Field(() => [OrderItemWhereInput], {nullable:true})
    AND?: Array<OrderItemWhereInput>;

    @Field(() => [OrderItemWhereInput], {nullable:true})
    OR?: Array<OrderItemWhereInput>;

    @Field(() => [OrderItemWhereInput], {nullable:true})
    NOT?: Array<OrderItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quantity?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeIngredientId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ingredientId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeIngredientScalarRelationFilter, {nullable:true})
    @Type(() => RecipeIngredientScalarRelationFilter)
    recipeIngredient?: RecipeIngredientScalarRelationFilter;

    @Field(() => OrderScalarRelationFilter, {nullable:true})
    order?: OrderScalarRelationFilter;

    @Field(() => IngredientNullableScalarRelationFilter, {nullable:true})
    @Type(() => IngredientNullableScalarRelationFilter)
    ingredient?: IngredientNullableScalarRelationFilter;
}
