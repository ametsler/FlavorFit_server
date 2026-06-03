import { Field, InputType } from '@nestjs/graphql'
import { IsDate, IsNotEmpty, IsOptional, Max, Min } from 'class-validator'

@InputType()
export class CreateScheduleInput {
	@Field(() => Boolean, { nullable: false })
	complete!: boolean

	@Field(() => Date, { nullable: true })
	@IsDate()
	@IsOptional()
	start!: Date | null

	@Field(() => Date, { nullable: true })
	@IsDate()
	@IsOptional()
	end!: Date | null

	@Field(() => Number, { nullable: true })
	@Min(0)
	@IsOptional()
	reminder!: number | null

	@Field(() => Number, { nullable: true })
	@Min(1)
	@Max(10)
	@IsOptional()
	rate!: number | null

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	recipeId: string
}
