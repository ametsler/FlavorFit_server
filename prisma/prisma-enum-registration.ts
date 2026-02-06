import { registerEnumType } from '@nestjs/graphql'
import {
	ActivityLevel,
	DeliveryStatus,
	Difficulty,
	Gender,
	NutritionGoal,
	OrderStatus,
	Role,
	Unit
} from 'prisma/generated/prisma/enums'

registerEnumType(DeliveryStatus, {
	name: 'DeliveryStatus'
})

registerEnumType(OrderStatus, {
	name: 'OrderStatus'
})

registerEnumType(Unit, {
	name: 'Unit'
})

registerEnumType(Difficulty, {
	name: 'Difficulty'
})

registerEnumType(Role, {
	name: 'Role'
})

registerEnumType(Gender, {
	name: 'Gender'
})

registerEnumType(ActivityLevel, {
	name: 'ActivityLevel'
})

registerEnumType(NutritionGoal, {
	name: 'NutritionGoal'
})
