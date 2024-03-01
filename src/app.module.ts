import { Module } from '@nestjs/common'

import { CompaniesModule } from './companies/companies.module'
import { DatabaseModule } from './database/database.module'

import Config from './app.config'

@Module({
	imports: [
		Config.ConfigModule,
		Config.GraphQLModule,
		CompaniesModule,
		DatabaseModule,
	],
	providers: [],
})
export class AppModule { }
