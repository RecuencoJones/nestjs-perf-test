import { SampleController } from '../../../../../src/modules/sample/sample.controller'
import { SampleService } from '../../../../../src/modules/sample/sample.service'

describe('SampleController', () => {
  let sampleService: SampleService
  let sampleController: SampleController

  beforeEach(async () => {
    sampleService = {
      findAll: () => {}
    } as SampleService

    sampleController = new SampleController(sampleService)
  })

  describe('getAllSamples', () => {
    it('should get all samples', async () => {
      const data = [
        {
          id: 1,
          name: 'sample-1'
        }, {
          id: 2,
          name: 'sample-2'
        }
      ]

      jest.spyOn(sampleService, 'findAll').mockImplementation(() => data)

      expect(await sampleController.getAllSamples()).toBe(data)
    })
  })
})
