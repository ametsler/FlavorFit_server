import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from 'prisma/generated/prisma/enums'
import { Profile } from '../profile/profile.model';
import { BodyMeasurement } from '../body-measurement/body-measurement.model';
import { Recipe } from '../recipe/recipe.model';
import { RecipeLike } from '../recipe-like/recipe-like.model';
import { RecipeView } from '../recipe-view/recipe-view.model';
import { Comment } from '../comment/comment.model';
import { CommentLike } from '../comment-like/comment-like.model';
import { Order } from '../order/order.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {defaultValue:'USER',nullable:false})
    role!: `${Role}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => BodyMeasurement, {nullable:true})
    bodyMeasurement?: BodyMeasurement | null;

    @Field(() => [Recipe], {nullable:true})
    recipe?: Array<Recipe>;

    @Field(() => [RecipeLike], {nullable:true})
    recipeLike?: Array<RecipeLike>;

    @Field(() => [RecipeView], {nullable:true})
    recipeView?: Array<RecipeView>;

    @Field(() => [Comment], {nullable:true})
    comment?: Array<Comment>;

    @Field(() => [CommentLike], {nullable:true})
    commentLike?: Array<CommentLike>;

    @Field(() => [Order], {nullable:true})
    order?: Array<Order>;
}
