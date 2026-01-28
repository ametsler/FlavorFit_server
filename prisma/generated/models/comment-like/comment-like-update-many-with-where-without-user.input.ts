import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeScalarWhereInput } from './comment-like-scalar-where.input';
import { Type } from 'class-transformer';
import { CommentLikeUpdateManyMutationInput } from './comment-like-update-many-mutation.input';

@InputType()
export class CommentLikeUpdateManyWithWhereWithoutUserInput {

    @Field(() => CommentLikeScalarWhereInput, {nullable:false})
    @Type(() => CommentLikeScalarWhereInput)
    where!: CommentLikeScalarWhereInput;

    @Field(() => CommentLikeUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentLikeUpdateManyMutationInput)
    data!: CommentLikeUpdateManyMutationInput;
}
