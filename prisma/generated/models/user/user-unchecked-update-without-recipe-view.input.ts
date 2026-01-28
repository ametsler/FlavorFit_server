import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from 'prisma/generated/prisma/enums'
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { BodyMeasurementUncheckedUpdateOneWithoutUserNestedInput } from '../body-measurement/body-measurement-unchecked-update-one-without-user-nested.input';
import { RecipeUncheckedUpdateManyWithoutAuthorNestedInput } from '../recipe/recipe-unchecked-update-many-without-author-nested.input';
import { Type } from 'class-transformer';
import { RecipeLikeUncheckedUpdateManyWithoutUserNestedInput } from '../recipe-like/recipe-like-unchecked-update-many-without-user-nested.input';
import { CommentUncheckedUpdateManyWithoutAuthorNestedInput } from '../comment/comment-unchecked-update-many-without-author-nested.input';
import { CommentLikeUncheckedUpdateManyWithoutUserNestedInput } from '../comment-like/comment-like-unchecked-update-many-without-user-nested.input';
import { OrderUncheckedUpdateManyWithoutUserNestedInput } from '../order/order-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutRecipeViewInput {

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

    @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => BodyMeasurementUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    bodyMeasurement?: BodyMeasurementUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    @Type(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput)
    recipe?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => RecipeLikeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => RecipeLikeUncheckedUpdateManyWithoutUserNestedInput)
    recipeLike?: RecipeLikeUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    @Type(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput)
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentLikeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    commentLike?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => OrderUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput;
}
