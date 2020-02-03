import Client from './client'
import { of, Observable } from 'rxjs'
import { delay } from 'rxjs/operators'

import { events } from 'mock'

export default class extends Client {
  baseUrl: string
  constructor(baseUrl: string) {
    super()
    this.baseUrl = baseUrl
  }

  getEvents(): Observable<Array<any>> {
    return of(events.getData()).pipe(delay(3))
  }
}
