import { Controller, Get, Inject } from '@nestjs/common'
import { SampleService } from './sample.service'

@Controller('/samples')
export class SampleController {
  public constructor(
    @Inject('SampleService')
    private readonly sampleService: SampleService
  ) {}

  @Get('/')
  public getAllSamples() {
    return this.sampleService.findAll()
  }
}
