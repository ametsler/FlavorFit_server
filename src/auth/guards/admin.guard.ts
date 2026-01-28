import { CanActivate, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import type { TRequestWithUser } from '../auth.interface'
import { Role } from 'prisma/generated/prisma/client'
import { ForbiddenError } from '@nestjs/apollo'

export class AdminGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context)
		const user = ctx.getContext<{ req: TRequestWithUser }>().req.user
		if (user?.role !== Role.ADMIN) {
			throw new ForbiddenError('Not authorized')
		}
		return true
	}
}
