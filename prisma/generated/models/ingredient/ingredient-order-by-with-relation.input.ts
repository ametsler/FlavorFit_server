import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeIngredientOrderByRelationAggregateInput } from '../recipe-ingredient/recipe-ingredient-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { OrderItemOrderByRelationAggregateInput } from '../order-item/order-item-order-by-relation-aggregate.input';

@InputType()
export class IngredientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    iconUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeIngredientOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecipeIngredientOrderByRelationAggregateInput)
    recipes?: RecipeIngredientOrderByRelationAggregateInput;

    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    @Type(() => OrderItemOrderByRelationAggregateInput)
    orderItems?: OrderItemOrderByRelationAggregateInput;
}
