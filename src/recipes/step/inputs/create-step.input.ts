import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator'

@InputType()
export class CreateStepInput {
	@Field(() => Int, { nullable: false })
	@IsPositive()
	order!: number

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	title!: string

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	description!: string

	@Field(() => String, { nullable: true })
	@IsOptional()
	imgUrl!: string | null

	@Field(() => String, { nullable: true })
	@IsOptional()
	recipeId!: string | null
}
