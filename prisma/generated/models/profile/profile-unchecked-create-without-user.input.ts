import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';
import { BodyMeasurementUncheckedCreateNestedManyWithoutProfileInput } from '../body-measurement/body-measurement-unchecked-create-nested-many-without-profile.input';

@InputType()
export class ProfileUncheckedCreateWithoutUserInput {

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

    @Field(() => BodyMeasurementUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutProfileInput;
}
