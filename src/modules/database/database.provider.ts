import { createConnection } from 'typeorm'

export const databaseProvider = {
  provide: 'DbConnection',
  useFactory: async (config) => await createConnection({
    type: 'mysql',
    host: config.get('DB_HOST') || 'localhost',
    port: config.get('DB_PORT') || 3306,
    username: config.get('DB_USER'),
    password: config.get('DB_PASS'),
    database: config.get('DB_NAME'),
    entities: [
      __dirname + '/entities/**/*.entity{.ts,.js}'
    ],
    synchronize: true
  }),
  inject: ['ConfigService']
}
