import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DishTypeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    order?: true;
}
