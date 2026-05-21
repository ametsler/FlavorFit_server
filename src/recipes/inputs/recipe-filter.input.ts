import { Field, InputType, Int } from '@nestjs/graphql'
import { IsIn, IsOptional, IsPositive, IsString } from 'class-validator'
import { Order, Sorting } from 'src/recipes/recipe.enum'

@InputType()
export class RecipeFilterInput {
	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	searchTerm?: string

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	category?: string

	@Field(() => Sorting, { defaultValue: Sorting.DATE })
	@IsOptional()
	@IsIn(Object.values(Sorting))
	sortBy!: Sorting

	@Field(() => Order, { defaultValue: Order.DESC })
	@IsOptional()
	@IsIn(Object.values(Order))
	sortOrder!: Order

	@Field(() => Int, { defaultValue: 1 })
	@IsPositive()
	page!: number

	@Field(() => Int, { defaultValue: 10 })
	@IsPositive()
	limit!: number
}
