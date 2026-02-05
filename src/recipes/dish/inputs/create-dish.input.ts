import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDishInput {
	@Field(() => Int, { nullable: false })
	order!: number

	@Field(() => String, { nullable: false })
	title!: string
}
