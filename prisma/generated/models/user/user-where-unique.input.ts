import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProfileNullableScalarRelationFilter } from '../profile/profile-nullable-scalar-relation-filter.input';
import { BodyMeasurementNullableScalarRelationFilter } from '../body-measurement/body-measurement-nullable-scalar-relation-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';
import { Type } from 'class-transformer';
import { RecipeLikeListRelationFilter } from '../recipe-like/recipe-like-list-relation-filter.input';
import { RecipeViewListRelationFilter } from '../recipe-view/recipe-view-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { CommentLikeListRelationFilter } from '../comment-like/comment-like-list-relation-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    profile?: ProfileNullableScalarRelationFilter;

    @Field(() => BodyMeasurementNullableScalarRelationFilter, {nullable:true})
    bodyMeasurement?: BodyMeasurementNullableScalarRelationFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    @Type(() => RecipeListRelationFilter)
    recipe?: RecipeListRelationFilter;

    @Field(() => RecipeLikeListRelationFilter, {nullable:true})
    @Type(() => RecipeLikeListRelationFilter)
    recipeLike?: RecipeLikeListRelationFilter;

    @Field(() => RecipeViewListRelationFilter, {nullable:true})
    @Type(() => RecipeViewListRelationFilter)
    recipeView?: RecipeViewListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    @Type(() => CommentListRelationFilter)
    comment?: CommentListRelationFilter;

    @Field(() => CommentLikeListRelationFilter, {nullable:true})
    commentLike?: CommentLikeListRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    order?: OrderListRelationFilter;
}
