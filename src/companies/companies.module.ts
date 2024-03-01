import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'

import { CompaniesRepository } from './companies.repository'
import { CompaniesResolver } from './companies.resolver'
import { CompaniesService } from './companies.service'

@Module({
	imports: [DatabaseModule],
	providers: [CompaniesResolver, CompaniesService, CompaniesRepository],
})
export class CompaniesModule {}
