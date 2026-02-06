import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'
import { UserModel } from 'src/users/models/user.model'
import { UpdateUserInput } from 'src/users/inputs/update-user.input'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => UserModel, { name: 'profile' })
	@Auth()
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Mutation(() => UserModel)
	@Auth()
	updateProfile(
		@CurrentUser('id') id: string,
		@Args('data') input: UpdateUserInput
	) {
		return this.usersService.updateProfile(id, input)
	}

	@Query(() => [UserModel], { name: 'users' })
	@Auth(Role.ADMIN)
	async getUsers() {
		return this.usersService.findAll()
	}
}
