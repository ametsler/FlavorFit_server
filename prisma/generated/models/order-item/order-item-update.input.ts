import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientUpdateOneRequiredWithoutOrderItemNestedInput } from '../recipe-ingredient/recipe-ingredient-update-one-required-without-order-item-nested.input';
import { Type } from 'class-transformer';
import { OrderUpdateOneRequiredWithoutOrderItemsNestedInput } from '../order/order-update-one-required-without-order-items-nested.input';
import { IngredientUpdateOneWithoutOrderItemsNestedInput } from '../ingredient/ingredient-update-one-without-order-items-nested.input';

@InputType()
export class OrderItemUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUpdateOneRequiredWithoutOrderItemNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUpdateOneRequiredWithoutOrderItemNestedInput)
    recipeIngredient?: RecipeIngredientUpdateOneRequiredWithoutOrderItemNestedInput;

    @Field(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInput, {nullable:true})
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput;

    @Field(() => IngredientUpdateOneWithoutOrderItemsNestedInput, {nullable:true})
    @Type(() => IngredientUpdateOneWithoutOrderItemsNestedInput)
    ingredient?: IngredientUpdateOneWithoutOrderItemsNestedInput;
}
