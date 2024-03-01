import { GraphQLError } from 'graphql'

import { ResponseBody } from '../interfaces'

export class ServiceError extends GraphQLError {
	constructor(error: ResponseBody) {
		const extensions = {
			code: error.code,
			status: error.status,
			originalMessage: error.originalError?.message,
		}

		super(error.message, { extensions, originalError: error.originalError })
	}
}
