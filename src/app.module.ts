import { Module, ValidationPipe } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { IngredientsModule } from './recipes/ingredients/ingredients.module'
import { RecipesModule } from './recipes/recipes.module'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { getGraphQLConfig } from 'src/config/graphql.config'
import { APP_PIPE } from '@nestjs/core'
import { StepModule } from './recipes/step/step.module';
import { CommentsModule } from './comments/comments.module';
import { OrdersModule } from './orders/orders.module';
import { DeliveriesModule } from './deliveries/deliveries.module'
import '../prisma/prisma-enum-registration'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphQLConfig,
			inject: [ConfigService]
		}),
		AuthModule,
		UsersModule,
		IngredientsModule,
		RecipesModule,
		OrdersModule,
		PrismaModule,
		StepModule,
		CommentsModule,
		DeliveriesModule
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_PIPE,
			useValue: new ValidationPipe({
				whitelist: true,
				transform: true
			})
		}
	]
})
export class AppModule {}
