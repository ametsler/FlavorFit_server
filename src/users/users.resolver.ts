import { Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { User } from 'prisma/generated/models/user'
import { Role } from 'prisma/generated/prisma/enums'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User, { name: 'profile' })
	@Auth()
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Query(() => User, { name: 'users' })
	@Auth(Role.ADMIN)
	async getUsers() {
		return this.usersService.findAll()
	}
}
