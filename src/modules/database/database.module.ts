import { Module } from '@nestjs/common'
import { databaseProvider } from './database.provider'
import { repositoryProviders } from './repository.providers'
import { ConfigModule } from '../config/config.module'

@Module({
  imports: [ ConfigModule ],
  providers: [ databaseProvider, ...repositoryProviders ],
  exports: [ databaseProvider, ...repositoryProviders ]
})
export class DatabaseModule {}
