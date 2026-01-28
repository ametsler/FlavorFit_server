import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeViewScalarWhereInput {

    @Field(() => [RecipeViewScalarWhereInput], {nullable:true})
    AND?: Array<RecipeViewScalarWhereInput>;

    @Field(() => [RecipeViewScalarWhereInput], {nullable:true})
    OR?: Array<RecipeViewScalarWhereInput>;

    @Field(() => [RecipeViewScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeViewScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
