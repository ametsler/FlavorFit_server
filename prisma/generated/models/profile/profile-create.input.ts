import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';
import { BodyMeasurementCreateNestedManyWithoutProfileInput } from '../body-measurement/body-measurement-create-nested-many-without-profile.input';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => Gender, {nullable:true})
    gender?: `${Gender}`;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => String, {nullable:true})
    contact?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BodyMeasurementCreateNestedManyWithoutProfileInput, {nullable:true})
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutProfileInput;

    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutProfileInput)
    user!: UserCreateNestedOneWithoutProfileInput;
}
