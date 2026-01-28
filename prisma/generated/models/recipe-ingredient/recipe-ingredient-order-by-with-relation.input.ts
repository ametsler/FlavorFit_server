import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderItemOrderByRelationAggregateInput } from '../order-item/order-item-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';
import { IngredientOrderByWithRelationInput } from '../ingredient/ingredient-order-by-with-relation.input';

@InputType()
export class RecipeIngredientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ingredientId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    @Type(() => OrderItemOrderByRelationAggregateInput)
    OrderItem?: OrderItemOrderByRelationAggregateInput;

    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    @Type(() => RecipeOrderByWithRelationInput)
    recipe?: RecipeOrderByWithRelationInput;

    @Field(() => IngredientOrderByWithRelationInput, {nullable:true})
    @Type(() => IngredientOrderByWithRelationInput)
    ingredient?: IngredientOrderByWithRelationInput;
}
