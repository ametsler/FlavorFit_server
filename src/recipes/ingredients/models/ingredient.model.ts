import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class IngredientModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: true })
	image!: string | null

	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => Number, { nullable: false })
	price!: number | null

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date
}
