import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateManyIngredientInput } from './order-item-create-many-ingredient.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderItemCreateManyIngredientInputEnvelope {

    @Field(() => [OrderItemCreateManyIngredientInput], {nullable:false})
    @Type(() => OrderItemCreateManyIngredientInput)
    data!: Array<OrderItemCreateManyIngredientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
