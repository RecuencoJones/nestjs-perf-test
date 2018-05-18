import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigModule } from './modules/config/config.module'
import { ConfigService } from './modules/config/config.service'
import { MetricsModule } from './modules/metrics/metrics.module'
import { MetricsService } from './modules/metrics/metrics.service'

const timer = process.hrtime()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const metrics = app.select(MetricsModule).get(MetricsService)
  const config = app.select(ConfigModule).get(ConfigService)

  await app.listen(config.get('PORT') || 3000)
    .then(() => metrics.setRampUpTime(timer))
}

bootstrap()
