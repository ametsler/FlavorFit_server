import { Field, InputType } from '@nestjs/graphql'
import { IsIn, IsOptional, IsString } from 'class-validator'

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

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsIn(['date', 'recommended', 'popularity'])
	sortBy?: 'date' | 'recommended' | 'popularity' = 'date'

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsIn(['asc', 'desc'])
	sortOrder?: 'asc' | 'desc' = 'desc'

	@Field(() => Number, { nullable: true, defaultValue: 0 })
	@IsOptional()
	skip?: number

	@Field(() => Number, { nullable: true, defaultValue: 10 })
	@IsOptional()
	take?: number
}
