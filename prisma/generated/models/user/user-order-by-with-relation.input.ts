import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { BodyMeasurementOrderByWithRelationInput } from '../body-measurement/body-measurement-order-by-with-relation.input';
import { RecipeOrderByRelationAggregateInput } from '../recipe/recipe-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { RecipeLikeOrderByRelationAggregateInput } from '../recipe-like/recipe-like-order-by-relation-aggregate.input';
import { RecipeViewOrderByRelationAggregateInput } from '../recipe-view/recipe-view-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { CommentLikeOrderByRelationAggregateInput } from '../comment-like/comment-like-order-by-relation-aggregate.input';
import { OrderOrderByRelationAggregateInput } from '../order/order-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => BodyMeasurementOrderByWithRelationInput, {nullable:true})
    bodyMeasurement?: BodyMeasurementOrderByWithRelationInput;

    @Field(() => RecipeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecipeOrderByRelationAggregateInput)
    recipe?: RecipeOrderByRelationAggregateInput;

    @Field(() => RecipeLikeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecipeLikeOrderByRelationAggregateInput)
    recipeLike?: RecipeLikeOrderByRelationAggregateInput;

    @Field(() => RecipeViewOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecipeViewOrderByRelationAggregateInput)
    recipeView?: RecipeViewOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CommentOrderByRelationAggregateInput)
    comment?: CommentOrderByRelationAggregateInput;

    @Field(() => CommentLikeOrderByRelationAggregateInput, {nullable:true})
    commentLike?: CommentLikeOrderByRelationAggregateInput;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    order?: OrderOrderByRelationAggregateInput;
}
