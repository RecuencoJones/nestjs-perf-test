import { Module } from '@nestjs/common'
import { ConfigModule } from './modules/config/config.module'
import { DatabaseModule } from './modules/database/database.module'
import { MetricsModule } from './modules/metrics/metrics.module'
import { SampleModule } from './modules/sample/sample.module'

@Module({
  imports: [
    ConfigModule,
    MetricsModule,
    DatabaseModule,
    SampleModule
  ]
})
export class AppModule {}
