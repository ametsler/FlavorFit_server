import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';
import { BodyMeasurementUncheckedUpdateManyWithoutProfileNestedInput } from '../body-measurement/body-measurement-unchecked-update-many-without-profile-nested.input';

@InputType()
export class ProfileUncheckedUpdateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    fullName?: string;

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

    @Field(() => BodyMeasurementUncheckedUpdateManyWithoutProfileNestedInput, {nullable:true})
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutProfileNestedInput;
}
