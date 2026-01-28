import { Role } from 'prisma/generated/prisma/enums'
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

registerEnumType(Role, {
	name: 'Role'
})

export interface IAuthTokenData {
	id: string
	role: Role
}

@ObjectType()
export class UserModel {
	@Field()
	id: string

	@Field()
	email: string

	@Field(() => Role)
	role: Role
}

@ObjectType()
export class AuthResponse {
	@Field()
	user: UserModel
	@Field()
	accessToken: string
}
