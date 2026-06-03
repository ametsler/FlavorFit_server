import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
import { RecipeModel } from 'src/recipes/models/recipe.model'
import { UserModel } from 'src/users/models/user.model'

@ObjectType()
export class Schedule {
	@Field(() => Date, { nullable: false })
	start!: Date

	@Field(() => Date, { nullable: false })
	end!: Date

	@Field(() => Boolean, { nullable: false })
	complete!: boolean

	@Field(() => Int, { nullable: true })
	reminder!: number | null

	@Field(() => Number, { nullable: true })
	rate!: number | null

	@Field(() => RecipeModel, { nullable: false })
	recipe?: RecipeModel

	@Field(() => UserModel, { nullable: false })
	user?: UserModel
}
