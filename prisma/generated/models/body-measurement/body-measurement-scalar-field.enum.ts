import { registerEnumType } from '@nestjs/graphql';

export enum BodyMeasurementScalarFieldEnum {
    id = "id",
    height = "height",
    weight = "weight",
    chest = "chest",
    waist = "waist",
    thigh = "thigh",
    arm = "arm",
    goalWeight = "goalWeight",
    activityLevel = "activityLevel",
    nutritionGoal = "nutritionGoal",
    userId = "userId",
    profileId = "profileId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BodyMeasurementScalarFieldEnum, { name: 'BodyMeasurementScalarFieldEnum', description: undefined })
