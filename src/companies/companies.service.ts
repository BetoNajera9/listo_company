import { Injectable } from '@nestjs/common'
import { Company } from '@prisma/client'

import { CompaniesRepository } from './companies.repository'
import { CreateCompany, UpdateCompany } from './dto/input'

@Injectable()
export class CompaniesService {
	constructor(private repository: CompaniesRepository) {}

	public async getAllCompanies(): Promise<Company[]> {
		return await this.repository.getAllCompanies()
	}

	public async getCompany(id: string): Promise<Company> {
		return await this.repository.getCompany(id)
	}

	public async creatCompany(data: CreateCompany): Promise<Company> {
		return await this.repository.createCompany(data)
	}

	public async updateCompany(
		id: string,
		data: UpdateCompany
	): Promise<Company> {
		return await this.repository.updateCompany(id, data)
	}

	public async removeCompany(id: string) {
		return await this.repository.removeCompany(id)
	}
}
