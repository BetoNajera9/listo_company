import { Module } from '@nestjs/common'

import { DatabaseModule } from './database/database.module'

import Config from './app.config'

@Module({
	imports: [
		Config.ConfigModule,
		Config.GraphQLModule,
		DatabaseModule,
	],
	providers: [],
})
export class AppModule { }
