import moment from 'moment'
import { Event } from 'types'

import Database from './database'

const yesterday = moment().subtract(1, 'd')
const today = moment()

const createData = (): Array<Event> => [
  new Event({
    date: today.toDate(),
    quantity: 1,
    price: null,
    eventType: 'Working',
    isHoursEventType: true,
    tasksCount: 1,
    firstTaskStart: yesterday.set('hours', 6).toDate(),
    lastTaskEnd: yesterday.set('hours', 18).toDate(),
  }),
  new Event({
    date: today.toDate(),
    quantity: 1,
    price: 1.2,
    eventType: 'Fuel',
    isExpenseType: true,
    tasksCount: 1,
    firstTaskStart: today.set('hours', 6).toDate(),
    lastTaskEnd: today.set('hours', 18).toDate(),
  }),
  new Event({
    date: today.toDate(),
    quantity: 2.2,
    price: null,
    eventType: 'Overtime',
    isAdditionalHoursEventType: true,
    isWorkHour: true,
    tasksCount: 1,
    firstTaskStart: today.set('hours', 6).toDate(),
    lastTaskEnd: today.set('hours', 18).toDate(),
  }),
  new Event({
    date: yesterday.toDate(),
    quantity: 4,
    price: null,
    eventType: 'Visit to the doctor',
    isAdditionalHoursEventType: true,
    tasksCount: 2,
    firstTaskStart: today.set('hours', 6).toDate(),
    lastTaskEnd: today.set('hours', 18).toDate(),
  }),
]

class Events extends Database<Event> {
  constructor() {
    super(createData())
  }
}

export default Events
