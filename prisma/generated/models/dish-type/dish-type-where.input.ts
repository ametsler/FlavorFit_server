import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class DishTypeWhereInput {

    @Field(() => [DishTypeWhereInput], {nullable:true})
    AND?: Array<DishTypeWhereInput>;

    @Field(() => [DishTypeWhereInput], {nullable:true})
    OR?: Array<DishTypeWhereInput>;

    @Field(() => [DishTypeWhereInput], {nullable:true})
    NOT?: Array<DishTypeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    @Type(() => RecipeListRelationFilter)
    recipes?: RecipeListRelationFilter;
}
