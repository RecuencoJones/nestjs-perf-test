import { Module } from '@nestjs/common'
import { MetricsService } from './metrics.service'
import { HealthController } from './health.controller'
import { MetricsController } from './metrics.controller'

@Module({
  controllers: [ MetricsController, HealthController ],
  providers: [ MetricsService ],
  exports: [ MetricsService ]
})
export class MetricsModule {}
