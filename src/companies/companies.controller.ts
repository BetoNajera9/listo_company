import { Injectable } from '@nestjs/common'
import { Company } from '@prisma/client'

import { DatabaseService } from '../database/database.service'
import { CreateCompany, UpdateCompany } from './dto/input'

@Injectable()
export class CompaniesController {
	constructor(private database: DatabaseService) {}

	async getAllCompanies(): Promise<Company[]> {
		return await this.database.company.findMany()
	}

	async getCompanies(query: any): Promise<Company[]> {
		return await this.database.company.findMany({ where: query })
	}

	async createCompany(data: CreateCompany) {
		return await this.database.company.create({ data })
	}

	async updateCompany(id: string, data: UpdateCompany) {
		return await this.database.company.update({
			where: { id },
			data,
		})
	}

	async removeCompany(id: string) {
		return await this.database.company.delete({
			where: { id },
		})
	}
}
