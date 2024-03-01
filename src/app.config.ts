import { ConfigModule, registerAs } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'
import { GraphQLError } from 'graphql'
import { join } from 'path'
import * as Joi from 'joi'

import { StatusCode } from './common/enums'

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
		formatError(error: GraphQLError) {
			try {
				const response = error.extensions?.response

				return {
					message: response ? response['message'] : error.message,
					extensions: {
						code: error.extensions?.code,
						status: response
							? StatusCode.BAD_REQUEST
							: error.extensions?.status,
						originalError: error.extensions?.originalMessage,
					},
				}
			} catch (error) {
				return error
			}
		},
	}),
}
