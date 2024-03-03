import { Injectable } from '@nestjs/common'

import { CompaniesController } from './companies.controller'
import { CompaniesError, CompaniesResponse } from './enums'
import { CreateCompany, UpdateCompany } from './dto/input'
import { ServiceResponse } from '../common/classes'
import { StatusCode } from '../common/enums'
import { StatusResponse } from './models'

@Injectable()
export class CompaniesService {
	private serviceResponse: ServiceResponse

	constructor(private controller: CompaniesController) {
		this.serviceResponse = new ServiceResponse(
			CompaniesResponse,
			CompaniesError
		)
	}

	/**
	 * Function to return a response with all companies
	 * @returns An object of type StatusResponse
	 */
	public async getAllCompanies(): Promise<StatusResponse> {
		try {
			const response = await this.controller.getAllCompanies()

			if (!response.length)
				this.serviceResponse.handlerResponse(
					false,
					CompaniesResponse.NO_DATA_FOUND
				)

			return this.serviceResponse.handlerResponse(
				true,
				CompaniesResponse.SEARCH,
				response
			)
		} catch (error) {
			this.serviceResponse.handlerError(
				CompaniesError.SEARCH,
				StatusCode.INTERNAL_SERVER,
				error
			)
		}
	}

	/**
	 * Function to return the company with specific id
	 * @param id A string
	 * @returns An object of type StatusResponse
	 */
	public async getCompany(id: string): Promise<StatusResponse> {
		try {
			const response = await this.controller.getCompanies({ id })

			if (!response.length)
				return this.serviceResponse.handlerResponse(
					false,
					CompaniesResponse.NO_DATA_FOUND
				)

			return this.serviceResponse.handlerResponse(
				true,
				CompaniesResponse.SEARCH,
				response
			)
		} catch (error) {
			this.serviceResponse.handlerError(
				CompaniesError.SEARCH,
				StatusCode.INTERNAL_SERVER,
				error
			)
		}
	}

	/**
	 * Function to create a company
	 * @param data all company information
	 * @returns An object of type StatusResponse
	 */
	public async creatCompany(data: CreateCompany): Promise<StatusResponse> {
		try {
			const find = await this.controller.getCompanies({ name: data.name })

			if (find.length > 0)
				return this.serviceResponse.handlerResponse(
					false,
					CompaniesResponse.NAME_EXISTS
				)

			await this.controller.createCompany(data)

			return this.serviceResponse.handlerResponse(
				true,
				CompaniesResponse.CREATE
			)
		} catch (error) {
			this.serviceResponse.handlerError(
				CompaniesError.CREATE,
				StatusCode.INTERNAL_SERVER,
				error
			)
		}
	}

	/**
	 * Function to update a company
	 * @param id A string
	 * @param data Company information to be changed
	 * @returns An object of type StatusResponse
	 */
	public async updateCompany(
		id: string,
		data: UpdateCompany
	): Promise<StatusResponse> {
		try {
			if (data.hasOwnProperty('name')) {
				const find = await this.controller.getCompanies({ name: data.name })

				if (find.length > 0)
					return this.serviceResponse.handlerResponse(
						false,
						CompaniesResponse.NAME_EXISTS
					)
			}

			await this.controller.updateCompany(id, data)

			return this.serviceResponse.handlerResponse(
				true,
				CompaniesResponse.UPDATE
			)
		} catch (error) {
			this.serviceResponse.handlerError(
				CompaniesError.UPDATE,
				StatusCode.INTERNAL_SERVER,
				error
			)
		}
	}

	/**
	 * Function to delete a company
	 * @param id A string
	 * @returns An object of type StatusResponse
	 */
	public async removeCompany(id: string): Promise<StatusResponse> {
		try {
			await this.controller.removeCompany(id)

			return this.serviceResponse.handlerResponse(
				true,
				CompaniesResponse.REMOVE
			)
		} catch (error) {
			this.serviceResponse.handlerError(
				CompaniesError.REMOVE,
				StatusCode.INTERNAL_SERVER,
				error
			)
		}
	}
}
