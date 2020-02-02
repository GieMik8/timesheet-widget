import Client from './client'
import { of, Observable } from 'rxjs'
import { delay } from 'rxjs/operators'

export default class extends Client {
  baseUrl: string
  constructor(baseUrl: string) {
    super()
    this.baseUrl = baseUrl
  }

  getEvents(): Observable<Array<any>> {
    return of([]).pipe(delay(3))
  }
}
