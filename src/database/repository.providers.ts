import { Connection } from 'typeorm'
import { Foo } from './entities/foo.entity'
import { Bar } from './entities/bar.entity'

export const repositoryProviders = [
  {
    provide: 'FooRepository',
    useFactory: (connection: Connection) => connection.getRepository(Foo),
    inject: ['DbConnection']
  },
  {
    provide: 'BarRepository',
    useFactory: (connection: Connection) => connection.getRepository(Bar),
    inject: ['DbConnection']
  }
]
