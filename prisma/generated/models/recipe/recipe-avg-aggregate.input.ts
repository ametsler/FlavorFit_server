import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    prepTime?: true;

    @Field(() => Boolean, {nullable:true})
    cookTime?: true;

    @Field(() => Boolean, {nullable:true})
    calories?: true;

    @Field(() => Boolean, {nullable:true})
    protein?: true;

    @Field(() => Boolean, {nullable:true})
    fats?: true;

    @Field(() => Boolean, {nullable:true})
    fiber?: true;

    @Field(() => Boolean, {nullable:true})
    rating?: true;
}
