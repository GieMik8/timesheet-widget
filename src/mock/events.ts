import moment from 'moment'
import { Event } from 'types'

import Database from './database'

const yesterday = moment().subtract(1, 'd')
const today = moment()

const createData = (): Array<Event> => [
  new Event({
    date: today.toDate(),
    quantity: 1 * 3600,
    price: null,
    eventType: 'Working 2',
    isHoursEventType: true,
    isWorkHour: true,
    tasksCount: 2,
    isApproved: true,
    firstTaskStart: yesterday.set('hours', 17).toDate(),
    lastTaskEnd: yesterday.set('hours', 18).toDate(),
  }),
  new Event({
    date: today.toDate(),
    quantity: 8 * 3600,
    price: null,
    eventType: 'Working',
    isHoursEventType: true,
    isWorkHour: true,
    tasksCount: 5,
    isApproved: true,
    firstTaskStart: yesterday.set('hours', 8).toDate(),
    lastTaskEnd: yesterday.set('hours', 17).toDate(),
  }),
  new Event({
    date: today.toDate(),
    quantity: 1,
    price: 1.2,
    eventType: 'Fuel',
    isExpenseType: true,
    isApproved: true,
  }),
  new Event({
    date: today.toDate(),
    quantity: 1,
    price: 17,
    eventType: 'Flight ticket',
    isExpenseType: true,
    isApproved: true,
  }),
  new Event({
    date: today.toDate(),
    quantity: 1 * 3600,
    price: null,
    eventType: 'Overtime',
    isAdditionalHoursEventType: true,
    isWorkHour: true,
    tasksCount: 3,
    isRejected: true,
    isApproved: false,
    firstTaskStart: today.set('hours', 17).toDate(),
    lastTaskEnd: today.set('hours', 18).toDate(),
  }),
  new Event({
    date: today.toDate(),
    quantity: 1 * 3600,
    price: null,
    eventType: 'Overtime 2',
    isAdditionalHoursEventType: true,
    isWorkHour: false,
    tasksCount: 1,
    isRejected: true,
    isApproved: false,
    firstTaskStart: today.set('hours', 18).toDate(),
    lastTaskEnd: today.set('hours', 19).toDate(),
  }),
  new Event({
    date: yesterday.toDate(),
    quantity: 4 * 3600,
    price: null,
    eventType: 'Visit to the doctor',
    isAdditionalHoursEventType: true,
    isApproved: true,
    firstTaskStart: yesterday.set('hours', 18).toDate(),
    lastTaskEnd: yesterday.set('hours', 22).toDate(),
  }),
  new Event({
    date: yesterday.toDate(),
    quantity: 3,
    price: 1.2,
    eventType: 'Fuel',
    isExpenseType: true,
    isApproved: true,
  }),
  new Event({
    date: yesterday.toDate(),
    quantity: 8 * 3600,
    price: null,
    eventType: 'Working',
    isHoursEventType: true,
    tasksCount: 5,
    isWorkHour: true,
    isApproved: true,
    firstTaskStart: yesterday.set('hours', 8).toDate(),
    lastTaskEnd: yesterday.set('hours', 17).toDate(),
  }),
  new Event({
    date: yesterday.subtract(1, 'd').toDate(),
    quantity: 6 * 3600,
    price: null,
    eventType: 'Working',
    isHoursEventType: true,
    tasksCount: 5,
    isWorkHour: true,
    isApproved: false,
    firstTaskStart: yesterday
      .subtract(1, 'd')
      .set('hours', 8)
      .toDate(),
    lastTaskEnd: yesterday
      .subtract(1, 'd')
      .set('hours', 17)
      .toDate(),
  }),
]

class Events extends Database<Event> {
  constructor() {
    super(createData())
  }
}

export default Events
