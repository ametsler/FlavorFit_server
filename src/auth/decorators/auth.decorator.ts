import { Role } from 'prisma/generated/prisma/enums'
import { AdminGuard } from 'src/auth/guards/admin.guard'
import { applyDecorators, UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from 'src/auth/guards/auth.guard'

export const Auth = (role: Role = Role.USER) => {
	if (role === Role.ADMIN) {
		return applyDecorators(UseGuards(GqlAuthGuard, AdminGuard))
	}
	return applyDecorators(UseGuards(GqlAuthGuard))
}
