import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
	@Field(() => Int, { defaultValue: 1, nullable: true })
	quantity!: number | null

	@Field(() => String, { nullable: false })
	orderId!: string

	@Field(() => String, { nullable: true })
	ingredientId!: string | null
}
