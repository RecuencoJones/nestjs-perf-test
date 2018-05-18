import { Module } from '@nestjs/common'
import { SampleController } from './sample.controller'
import { SampleService } from './sample.service'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [ DatabaseModule ],
  controllers: [ SampleController ],
  providers: [ SampleService ]
})
export class SampleModule {}
