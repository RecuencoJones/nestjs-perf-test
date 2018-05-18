import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { MetricsService } from './services/metrics.service'

const timer = process.hrtime()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const metrics = app.select(AppModule).get(MetricsService)

  await app.listen(3000).then(() => metrics.setRampUpTime(timer))
}

bootstrap()
