import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from 'prisma/generated/prisma/enums'
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { BodyMeasurementUncheckedCreateNestedOneWithoutUserInput } from '../body-measurement/body-measurement-unchecked-create-nested-one-without-user.input';
import { RecipeLikeUncheckedCreateNestedManyWithoutUserInput } from '../recipe-like/recipe-like-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { RecipeViewUncheckedCreateNestedManyWithoutUserInput } from '../recipe-view/recipe-view-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input';
import { CommentLikeUncheckedCreateNestedManyWithoutUserInput } from '../comment-like/comment-like-unchecked-create-nested-many-without-user.input';
import { OrderUncheckedCreateNestedManyWithoutUserInput } from '../order/order-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => BodyMeasurementUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    bodyMeasurement?: BodyMeasurementUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => RecipeLikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => RecipeLikeUncheckedCreateNestedManyWithoutUserInput)
    recipeLike?: RecipeLikeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => RecipeViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => RecipeViewUncheckedCreateNestedManyWithoutUserInput)
    recipeView?: RecipeViewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    @Type(() => CommentUncheckedCreateNestedManyWithoutAuthorInput)
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentLikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    commentLike?: CommentLikeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    order?: OrderUncheckedCreateNestedManyWithoutUserInput;
}
