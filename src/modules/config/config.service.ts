import { Injectable } from '@nestjs/common'
import { config } from 'dotenv'

@Injectable()
export class ConfigService {
  private readonly config: {
    [prop: string]: any
  }

  public constructor() {
    config()
    this.config = process.env

    console.log(this.config)
  }

  public get(key: string): any {
    return this.config[key]
  }
}
