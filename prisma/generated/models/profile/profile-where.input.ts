import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGenderNullableFilter } from '../prisma/enum-gender-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BodyMeasurementListRelationFilter } from '../body-measurement/body-measurement-list-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileWhereInput {

    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fullName?: StringFilter;

    @Field(() => EnumGenderNullableFilter, {nullable:true})
    gender?: EnumGenderNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    age?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    photo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contact?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BodyMeasurementListRelationFilter, {nullable:true})
    bodyMeasurements?: BodyMeasurementListRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;
}
