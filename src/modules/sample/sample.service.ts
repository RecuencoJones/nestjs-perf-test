import { Injectable, Inject } from '@nestjs/common'
import { Foo } from '../database/entities/foo.entity'
import { Bar } from '../database/entities/bar.entity'
import { Repository } from 'typeorm'

@Injectable()
export class SampleService {
  public constructor(
    @Inject('FooRepository')
    private readonly fooRepository: Repository<Foo>,

    @Inject('BarRepository')
    private readonly barRepository: Repository<Bar>
  ) {}

  findAll(): Promise<Array<Foo>> {
    return this.fooRepository.find()
  }
}
