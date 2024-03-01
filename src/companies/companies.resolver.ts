import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { CompaniesService } from './companies.service'

import { CreateCompany } from './dto/input'
import { GetCompany, RemoveCompany, UpdateCompany } from './dto/args'

import { Company } from './models'

@Resolver(() => Company)
export class CompaniesResolver {
	constructor(private readonly companiesService: CompaniesService) {}

	@Query(() => [Company], { name: 'allCompanies', nullable: false })
	async getAllCompanies(): Promise<Company[]> {
		return await this.companiesService.getAllCompanies()
	}

	@Query(() => Company, { name: 'company', nullable: false })
	async getCompany(@Args() { id }: GetCompany): Promise<Company> {
		return await this.companiesService.getCompany(id)
	}

	@Mutation(() => Company)
	async createCompany(
		@Args('createCompany') createCompany: CreateCompany
	): Promise<Company> {
		return await this.companiesService.creatCompany(createCompany)
	}

	@Mutation(() => Company)
	async updateCompany(
		@Args() { id, company }: UpdateCompany
	): Promise<Company> {
		return await this.companiesService.updateCompany(id, company)
	}

	@Mutation(() => Company)
	async removeCompany(@Args() { id }: RemoveCompany): Promise<Company> {
		return await this.companiesService.removeCompany(id)
	}
}
