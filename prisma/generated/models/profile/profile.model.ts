import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';
import { BodyMeasurement } from '../body-measurement/body-measurement.model';
import { User } from '../user/user.model';

@ObjectType()
export class Profile {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => Gender, {nullable:true})
    gender!: `${Gender}` | null;

    @Field(() => Int, {nullable:true})
    age!: number | null;

    @Field(() => String, {nullable:true})
    bio!: string | null;

    @Field(() => String, {nullable:true})
    photo!: string | null;

    @Field(() => String, {nullable:true})
    contact!: string | null;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [BodyMeasurement], {nullable:true})
    bodyMeasurements?: Array<BodyMeasurement>;

    @Field(() => User, {nullable:false})
    user?: User;
}
