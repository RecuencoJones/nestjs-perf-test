import { Injectable, Res } from '@nestjs/common'
import * as client from 'prom-client'

@Injectable()
export class MetricsService {
  public constructor() {
    client.collectDefaultMetrics({ timeout: 1000 })
  }

  public setRampUpTime(timer) {
    const [ seconds, nanos ] = process.hrtime(timer)

    new client.Gauge({
      name: 'ramp_up_time',
      help: 'time it took for service to be ready (ns)'
    }).set(seconds * 1e9 + nanos)
  }

  public getMetrics() {
    const { contentType } = client.register
    const data = client.register.metrics()

    return {
      contentType,
      data
    }
  }
}
