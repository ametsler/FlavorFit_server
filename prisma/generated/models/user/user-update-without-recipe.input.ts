import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from 'prisma/generated/prisma/enums'
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { BodyMeasurementUpdateOneWithoutUserNestedInput } from '../body-measurement/body-measurement-update-one-without-user-nested.input';
import { RecipeLikeUpdateManyWithoutUserNestedInput } from '../recipe-like/recipe-like-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { RecipeViewUpdateManyWithoutUserNestedInput } from '../recipe-view/recipe-view-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutAuthorNestedInput } from '../comment/comment-update-many-without-author-nested.input';
import { CommentLikeUpdateManyWithoutUserNestedInput } from '../comment-like/comment-like-update-many-without-user-nested.input';
import { OrderUpdateManyWithoutUserNestedInput } from '../order/order-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUserNestedInput;

    @Field(() => BodyMeasurementUpdateOneWithoutUserNestedInput, {nullable:true})
    bodyMeasurement?: BodyMeasurementUpdateOneWithoutUserNestedInput;

    @Field(() => RecipeLikeUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => RecipeLikeUpdateManyWithoutUserNestedInput)
    recipeLike?: RecipeLikeUpdateManyWithoutUserNestedInput;

    @Field(() => RecipeViewUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => RecipeViewUpdateManyWithoutUserNestedInput)
    recipeView?: RecipeViewUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    @Type(() => CommentUpdateManyWithoutAuthorNestedInput)
    comment?: CommentUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentLikeUpdateManyWithoutUserNestedInput, {nullable:true})
    commentLike?: CommentLikeUpdateManyWithoutUserNestedInput;

    @Field(() => OrderUpdateManyWithoutUserNestedInput, {nullable:true})
    order?: OrderUpdateManyWithoutUserNestedInput;
}
