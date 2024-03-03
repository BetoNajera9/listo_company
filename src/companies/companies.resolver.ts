import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { GetCompany, RemoveCompany, UpdateCompany } from './dto/args'
import { CompaniesService } from './companies.service'
import { Company, StatusResponse } from './models'
import { CreateCompany } from './dto/input'


@Resolver(() => Company)
export class CompaniesResolver {
	constructor(private readonly companiesService: CompaniesService) { }

	/**
	 * A query to return a response with all companies
	 * @returns An object of type StatusResponse
	 */
	@Query(() => StatusResponse, { name: 'allCompanies', nullable: false })
	async getAllCompanies(): Promise<StatusResponse> {
		return await this.companiesService.getAllCompanies()
	}

	/**
	 * A query to return the company with specific id
	 * @param GetCompany A arg object GetCompany
	 * @returns An object of type StatusResponse
	 */
	@Query(() => StatusResponse, { name: 'company' })
	async getCompany(@Args() { id }: GetCompany): Promise<StatusResponse> {
		return await this.companiesService.getCompany(id)
	}

	/**
	 * A mutation to create a company
	 * @param createCompany input with all company information
	 * @returns An object of type StatusResponse
	 */
	@Mutation(() => StatusResponse)
	async createCompany(
		@Args('createCompany') createCompany: CreateCompany
	): Promise<StatusResponse> {
		return await this.companiesService.creatCompany(createCompany)
	}

	/**
	 * A mutation to update a company
	 * @param UpdateCompany Company information to be changed
	 * @returns An object of type StatusResponse
	 */
	@Mutation(() => StatusResponse)
	async updateCompany(
		@Args() { id, company }: UpdateCompany
	): Promise<StatusResponse> {
		return await this.companiesService.updateCompany(id, company)
	}

	/**
	 * A mutation to delete a company
	 * @param RemoveCompany arg object RemoveCompany
	 * @returns An object of type StatusResponse
	 */
	@Mutation(() => StatusResponse)
	async removeCompany(@Args() { id }: RemoveCompany): Promise<StatusResponse> {
		return await this.companiesService.removeCompany(id)
	}
}
