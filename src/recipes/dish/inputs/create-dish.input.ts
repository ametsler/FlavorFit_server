import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsPositive } from 'class-validator'

@InputType()
export class CreateDishInput {
	@Field(() => Int, { nullable: false })
	@IsPositive()
	order!: number

	@Field(() => String, { nullable: false })
	@IsNotEmpty()
	title!: string
}
