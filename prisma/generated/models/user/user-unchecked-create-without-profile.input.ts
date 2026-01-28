import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from 'prisma/generated/prisma/enums'
import { BodyMeasurementUncheckedCreateNestedOneWithoutUserInput } from '../body-measurement/body-measurement-unchecked-create-nested-one-without-user.input';
import { RecipeUncheckedCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-unchecked-create-nested-many-without-author.input';
import { Type } from 'class-transformer';
import { RecipeLikeUncheckedCreateNestedManyWithoutUserInput } from '../recipe-like/recipe-like-unchecked-create-nested-many-without-user.input';
import { RecipeViewUncheckedCreateNestedManyWithoutUserInput } from '../recipe-view/recipe-view-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input';
import { CommentLikeUncheckedCreateNestedManyWithoutUserInput } from '../comment-like/comment-like-unchecked-create-nested-many-without-user.input';
import { OrderUncheckedCreateNestedManyWithoutUserInput } from '../order/order-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutProfileInput {

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

    @Field(() => BodyMeasurementUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    bodyMeasurement?: BodyMeasurementUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    @Type(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput)
    recipe?: RecipeUncheckedCreateNestedManyWithoutAuthorInput;

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
