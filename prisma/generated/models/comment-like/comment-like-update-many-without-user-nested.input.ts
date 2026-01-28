import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateWithoutUserInput } from './comment-like-create-without-user.input';
import { Type } from 'class-transformer';
import { CommentLikeCreateOrConnectWithoutUserInput } from './comment-like-create-or-connect-without-user.input';
import { CommentLikeUpsertWithWhereUniqueWithoutUserInput } from './comment-like-upsert-with-where-unique-without-user.input';
import { CommentLikeCreateManyUserInputEnvelope } from './comment-like-create-many-user-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentLikeWhereUniqueInput } from './comment-like-where-unique.input';
import { CommentLikeUpdateWithWhereUniqueWithoutUserInput } from './comment-like-update-with-where-unique-without-user.input';
import { CommentLikeUpdateManyWithWhereWithoutUserInput } from './comment-like-update-many-with-where-without-user.input';
import { CommentLikeScalarWhereInput } from './comment-like-scalar-where.input';

@InputType()
export class CommentLikeUpdateManyWithoutUserNestedInput {

    @Field(() => [CommentLikeCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentLikeCreateWithoutUserInput)
    create?: Array<CommentLikeCreateWithoutUserInput>;

    @Field(() => [CommentLikeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentLikeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentLikeCreateOrConnectWithoutUserInput>;

    @Field(() => [CommentLikeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentLikeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CommentLikeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CommentLikeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentLikeCreateManyUserInputEnvelope)
    createMany?: CommentLikeCreateManyUserInputEnvelope;

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

    @Field(() => [CommentLikeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentLikeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CommentLikeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CommentLikeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CommentLikeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CommentLikeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CommentLikeScalarWhereInput], {nullable:true})
    @Type(() => CommentLikeScalarWhereInput)
    deleteMany?: Array<CommentLikeScalarWhereInput>;
}
