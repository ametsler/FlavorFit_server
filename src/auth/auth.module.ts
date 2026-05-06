import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getJwtConfig } from 'src/config/jwt.config'
import { UsersModule } from 'src/users/users.module'
import { JwtStrategy } from 'src/auth/strategy/strategy'
import { PassportModule } from '@nestjs/passport'
import { EmailModule } from 'src/email/email.module'
import { AuthAccountService } from 'src/auth/auth-account.service'

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		UsersModule,
		EmailModule
	],
	providers: [JwtStrategy, AuthService, AuthAccountService, AuthResolver]
})
export class AuthModule {}
