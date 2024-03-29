import { Company, StatusResponse } from '../../companies/models'
import { ServiceError } from './service-error.class'
import { StatusCode } from '../enums'

export class ServiceResponse {
	private serviceResponse: Record<string, any>
	private serviceError: Record<string, any>

	constructor(responses?: Record<string, any>, errors?: Record<string, any>) {
		this.serviceResponse = responses || {}
		this.serviceError = errors || {}
	}

	/**
	 * Function to generate and return a response
	 * @param success A boolean representing the status of response
	 * @param messageResponse A string representing the response text
	 * @param data All the data to return
	 * @returns An object of type StatusResponse
	 */
	handlerResponse(
		success: boolean,
		messageResponse: string,
		data?: Company[]
	): StatusResponse {
		const index = Object.values(this.serviceResponse).indexOf(messageResponse)
		const code = Object.keys(this.serviceResponse)[index]

		return !code
			? {
				success,
				code: 'UNDEFINED_RESPONSE',
				message: messageResponse,
				data,
			}
			: {
				success,
				code,
				message: messageResponse,
				data,
			}
	}

	/**
	 * Function to generate and throw a CustomGraphQLError instance
	 * @param messageError A string representing the error text
	 * @param status A string representing the status code of the error
	 * @param originalError An error that is the original error
	 */
	handlerError(
		messageError: string,
		status: StatusCode,
		originalError?: Error
	) {
		const index = Object.values(this.serviceError).indexOf(messageError)
		const code = Object.keys(this.serviceError)[index]

		let error = !code
			? {
				code: 'UNDEFINED_ERROR',
				message: messageError,
			}
			: {
				code,
				status,
				originalError,
				message: messageError,
			}

		throw new ServiceError(error)
	}
}
