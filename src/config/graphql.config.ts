import { ConfigService } from '@nestjs/config'
import { ApolloDriverConfig } from '@nestjs/apollo'
import type { IGqlContext } from 'src/app.interface'

export const getGraphQLConfig = (
	configService: ConfigService
): ApolloDriverConfig => ({
	autoSchemaFile: true,
	sortSchema: true,
	playground: configService.get<string>('MODE') !== 'production' || false,
	context: ({ req, res }: IGqlContext): IGqlContext => ({ req, res })
})
