import { ConfigService } from '@nestjs/config'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { Request, Response } from 'express'

interface GraphQLContext {
	req: Request
	res: Response
}

export const getGraphQLConfig =
	(configService: ConfigService): ApolloDriverConfig => ({
		autoSchemaFile: true,
		sortSchema: true,
		playground: configService.get<string>('MODE') !== 'production' || false,
		context: ({ req, res }: GraphQLContext): GraphQLContext => ({ req, res })
	})
