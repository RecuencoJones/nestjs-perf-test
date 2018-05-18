import { createConnection } from 'typeorm'

export const databaseProvider = {
  provide: 'DbConnection',
  useFactory: async () => await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [
      __dirname + '/entities/**/*.entity{.ts,.js}'
    ],
    synchronize: true
  })
}
