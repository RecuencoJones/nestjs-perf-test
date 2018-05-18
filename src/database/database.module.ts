import { Module } from '@nestjs/common'
import { databaseProvider } from './database.provider'
import { repositoryProviders } from './repository.providers'

@Module({
  providers: [ databaseProvider, ...repositoryProviders ],
  exports: [ databaseProvider, ...repositoryProviders ]
})
export class DatabaseModule {}
