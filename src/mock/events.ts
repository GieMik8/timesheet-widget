import moment from 'moment'
import { Event, EventType } from 'types'

import Database from './database'

const yesterday = moment().subtract(1, 'd')
const today = moment()

const createData = (): Array<Event> => [
  new Event({
    date: yesterday.toDate(),
    quantity: 1,
    price: 1,
    eventType: EventType.Expense,
    isWorkHour: true,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTaskStart: yesterday
      .set('hours', 11)
      .set('minutes', 15)
      .toDate(),
    lastTaskEnd: yesterday.add(1, 'h').toDate(),
  }),
  new Event({
    date: today.toDate(),
    quantity: 1,
    price: 1,
    eventType: EventType.Expense,
    isWorkHour: true,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTaskStart: today.subtract(1, 'h').toDate(),
    lastTaskEnd: today.add(1, 'h').toDate(),
  }),
]

class Events extends Database<Event> {
  constructor() {
    super(createData())
  }
}

export default Events
