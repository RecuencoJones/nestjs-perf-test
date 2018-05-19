import { Repository } from 'typeorm'
import { Foo } from '../../../../../src/modules/database/entities/foo.entity'
import { Bar } from '../../../../../src/modules/database/entities/bar.entity'
import { SampleService } from '../../../../../src/modules/sample/sample.service'

describe('SampleService', () => {
  let fooRepository: Repository<Foo>
  let barRepository: Repository<Bar>
  let sampleService: SampleService

  beforeEach(() => {
    fooRepository = {
      find: () => {}
    } as Repository<Foo>
    barRepository = {} as Repository<Bar>

    sampleService = new SampleService(fooRepository, barRepository)
  })

  describe('findAll', () => {
    it('should retrieve all foos', async () => {
      const data = [
        {
          id: 1,
          name: 'sample-1'
        }
      ]

      jest.spyOn(fooRepository, 'find').mockImplementation(() => data)

      expect(await sampleService.findAll()).toBe(data)
    })
  })
})
