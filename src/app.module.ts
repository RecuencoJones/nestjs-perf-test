import { Module } from '@nestjs/common'
import { HealthController } from './controllers/health.controller'
import { MetricsController } from './controllers/metrics.controller'
import { MetricsService } from './services/metrics.service'
import { SampleController } from './controllers/sample.controller'
import { SampleService } from './services/sample.service'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    HealthController,
    MetricsController,
    SampleController
  ],
  providers: [
    MetricsService,
    SampleService
  ]
})
export class AppModule {}
