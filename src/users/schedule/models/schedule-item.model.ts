import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ScheduleItem {
	@Field(() => Date, { nullable: false })
	start!: Date

	@Field(() => Date, { nullable: false })
	end!: Date

	@Field(() => Boolean, { nullable: false })
	complete!: boolean

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => Int, { nullable: true })
	calories!: number | null

	@Field(() => String, { nullable: true })
	cuisineType!: string | null

	@Field(() => String, { nullable: true })
	dishType!: string | null
}
