import { registerEnumType } from '@nestjs/graphql';

export enum ActivityLevel {
    SEDENTARY = "SEDENTARY",
    LIGHT = "LIGHT",
    MODERATE = "MODERATE",
    ACTIVITY = "ACTIVITY",
    VERY_ACTIVITY = "VERY_ACTIVITY"
}


registerEnumType(ActivityLevel, { name: 'ActivityLevel', description: undefined })
