import { GraphQLError } from 'graphql'

import { ResponseBody } from '../interfaces'

/** Class to create a GraphQLError */
export class ServiceError extends GraphQLError {
	/**
	 * Function to create a CustomGraphQLError instance
	 * @param error An object of type GraphQLResponseBody
	 */
	constructor(error: ResponseBody) {
		const extensions = {
			code: error.code,
			status: error.status,
			originalMessage: error.originalError?.message,
		}

		super(error.message, { extensions, originalError: error.originalError })
	}
}
