import { Injectable } from '@nestjs/common'
import { Company } from '@prisma/client'

import { DatabaseService } from '../database/database.service'
import { CreateCompany, UpdateCompany } from './dto/input'

@Injectable()
export class CompaniesController {
	constructor(private database: DatabaseService) { }

	/**
	 * Function to return a response with all companies
	 * @returns An object of type StatusResponse
	 */
	async getAllCompanies(): Promise<Company[]> {
		return await this.database.company.findMany()
	}

	/**
	 * Function to return the company with specific object
	 * @param query A object with query to find
	 * @returns An object of type StatusResponse
	 */
	async getCompanies(query: any): Promise<Company[]> {
		return await this.database.company.findMany({ where: query })
	}

	/**
	 * Function to create a company
	 * @param data all company information
	 * @returns An object of type StatusResponse
	 */
	async createCompany(data: CreateCompany) {
		return await this.database.company.create({ data })
	}

	/**
	 * Function to update a company
	 * @param id A string
	 * @param data company information to be changed
	 * @returns An object of type StatusResponse
	 */
	async updateCompany(id: string, data: UpdateCompany) {
		return await this.database.company.update({
			where: { id },
			data,
		})
	}

	/**
	 * Function to delete a company
	 * @param id A string
	 * @returns An object of type StatusResponse
	 */
	async removeCompany(id: string) {
		return await this.database.company.delete({
			where: { id },
		})
	}
}
