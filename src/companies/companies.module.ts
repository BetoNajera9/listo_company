import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'

import { CompaniesController } from './companies.controller'
import { CompaniesResolver } from './companies.resolver'
import { CompaniesService } from './companies.service'

@Module({
	imports: [DatabaseModule],
	providers: [CompaniesResolver, CompaniesService, CompaniesController],
})
export class CompaniesModule {}
