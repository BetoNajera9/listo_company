import { ConfigModule, registerAs } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'
import { join } from 'path'
import * as Joi from 'joi'

export const isProduction = () => process.env.API_ENVIRONMENT === 'production'

export const config = registerAs('api', () => ({
	mongoUri: process.env.USER_MONGO_URI,
}))

export default {
	ConfigModule: ConfigModule.forRoot({
		ignoreEnvFile: isProduction(),
		isGlobal: true,
		load: [config],
		validationSchema: Joi.object({
			DATABASE_URL: Joi.string().required(),
		}),
	}),

	GraphQLModule: GraphQLModule.forRoot({
		driver: ApolloDriver,
		autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		playground: !isProduction(),
		introspection: true,
		sortSchema: true,
	}),
}
