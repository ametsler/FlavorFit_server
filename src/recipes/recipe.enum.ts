import { registerEnumType } from '@nestjs/graphql'

export enum Order {
	ASC = 'asc',
	DESC = 'desc',
}

registerEnumType(Order, { name: 'Order', description: undefined })

export enum Sorting {
	DATE = 'date',
	RECOMMENDED = 'recommended',
	POPULARITY = 'popularity'
}

registerEnumType(Sorting, { name: 'Sorting', description: undefined })
