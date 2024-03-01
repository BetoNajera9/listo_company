import { Injectable } from '@nestjs/common'
import { Company } from '@prisma/client'

import { DatabaseService } from '../database/database.service'
import { CreateCompany, UpdateCompany } from './dto/input'

@Injectable()
export class CompaniesRepository {
	constructor(private database: DatabaseService) {}

	async getAllCompanies(): Promise<Company[]> {
		try {
			const res = await this.database.company.findMany()

			return res
		} catch (error) {
			console.error(error)
		}
	}

	async getCompany(id: string): Promise<Company> {
		return await this.database.company.findUnique({ where: { id } })
	}

	async createCompany(data: CreateCompany) {
		const res = await this.database.company.create({ data })

		return res
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
