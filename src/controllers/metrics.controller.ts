import { Controller, Get, Inject, Res } from '@nestjs/common'

@Controller('/metrics')
export class MetricsController {
  constructor(
    @Inject('MetricsService')
    private readonly metricsService
  ) {}

  @Get('/')
  getMetrics(@Res() res) {
    const { data, contentType } = this.metricsService.getMetrics()

    res.set('Content-Type', contentType).send(data)
  }
}
