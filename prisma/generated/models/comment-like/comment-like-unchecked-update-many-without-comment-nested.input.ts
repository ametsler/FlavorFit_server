import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateWithoutCommentInput } from './comment-like-create-without-comment.input';
import { Type } from 'class-transformer';
import { CommentLikeCreateOrConnectWithoutCommentInput } from './comment-like-create-or-connect-without-comment.input';
import { CommentLikeUpsertWithWhereUniqueWithoutCommentInput } from './comment-like-upsert-with-where-unique-without-comment.input';
import { CommentLikeCreateManyCommentInputEnvelope } from './comment-like-create-many-comment-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';
import { CommentLikeUpdateWithWhereUniqueWithoutCommentInput } from './comment-like-update-with-where-unique-without-comment.input';
import { CommentLikeUpdateManyWithWhereWithoutCommentInput } from './comment-like-update-many-with-where-without-comment.input';
import { CommentLikeScalarWhereInput } from './comment-like-scalar-where.input';

@InputType()
export class CommentLikeUncheckedUpdateManyWithoutCommentNestedInput {

    @Field(() => [CommentLikeCreateWithoutCommentInput], {nullable:true})
    @Type(() => CommentLikeCreateWithoutCommentInput)
    create?: Array<CommentLikeCreateWithoutCommentInput>;

    @Field(() => [CommentLikeCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => CommentLikeCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<CommentLikeCreateOrConnectWithoutCommentInput>;

    @Field(() => [CommentLikeUpsertWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => CommentLikeUpsertWithWhereUniqueWithoutCommentInput)
    upsert?: Array<CommentLikeUpsertWithWhereUniqueWithoutCommentInput>;

    @Field(() => CommentLikeCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => CommentLikeCreateManyCommentInputEnvelope)
    createMany?: CommentLikeCreateManyCommentInputEnvelope;

    @Field(() => [CommentLikeWhereUniqueInput], {nullable:true})
    @Type(() => CommentLikeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>>;

    @Field(() => [CommentLikeWhereUniqueInput], {nullable:true})
    @Type(() => CommentLikeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>>;

    @Field(() => [CommentLikeWhereUniqueInput], {nullable:true})
    @Type(() => CommentLikeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>>;

    @Field(() => [CommentLikeWhereUniqueInput], {nullable:true})
    @Type(() => CommentLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentLikeWhereUniqueInput, 'id' | 'commentId_userId'>>;

    @Field(() => [CommentLikeUpdateWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => CommentLikeUpdateWithWhereUniqueWithoutCommentInput)
    update?: Array<CommentLikeUpdateWithWhereUniqueWithoutCommentInput>;

    @Field(() => [CommentLikeUpdateManyWithWhereWithoutCommentInput], {nullable:true})
    @Type(() => CommentLikeUpdateManyWithWhereWithoutCommentInput)
    updateMany?: Array<CommentLikeUpdateManyWithWhereWithoutCommentInput>;

    @Field(() => [CommentLikeScalarWhereInput], {nullable:true})
    @Type(() => CommentLikeScalarWhereInput)
    deleteMany?: Array<CommentLikeScalarWhereInput>;
}
