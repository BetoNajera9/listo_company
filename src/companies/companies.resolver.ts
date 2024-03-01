import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { GetCompany, RemoveCompany, UpdateCompany } from './dto/args'
import { CompaniesService } from './companies.service'
import { Company, StatusResponse } from './models'
import { CreateCompany } from './dto/input'


@Resolver(() => Company)
export class CompaniesResolver {
	constructor(private readonly companiesService: CompaniesService) { }

	@Query(() => StatusResponse, { name: 'allCompanies', nullable: false })
	async getAllCompanies(): Promise<StatusResponse> {
		return await this.companiesService.getAllCompanies()
	}

	@Query(() => StatusResponse, { name: 'company' })
	async getCompany(@Args() { id }: GetCompany): Promise<StatusResponse> {
		return await this.companiesService.getCompany(id)
	}

	@Mutation(() => StatusResponse)
	async createCompany(
		@Args('createCompany') createCompany: CreateCompany
	): Promise<StatusResponse> {
		return await this.companiesService.creatCompany(createCompany)
	}

	@Mutation(() => StatusResponse)
	async updateCompany(
		@Args() { id, company }: UpdateCompany
	): Promise<StatusResponse> {
		return await this.companiesService.updateCompany(id, company)
	}

	@Mutation(() => StatusResponse)
	async removeCompany(@Args() { id }: RemoveCompany): Promise<StatusResponse> {
		return await this.companiesService.removeCompany(id)
	}
}
