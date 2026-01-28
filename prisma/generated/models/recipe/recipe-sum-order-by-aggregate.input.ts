import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RecipeSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    calories?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    protein?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fats?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fiber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;
}
