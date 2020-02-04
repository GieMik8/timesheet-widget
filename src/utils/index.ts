import moment, { Moment } from 'moment'

import { Event, EventType } from 'types'

export function getLast7Days(): Array<Moment> {
  return [...Array(7).keys()].map((day: number) => moment().subtract(day, 'd')).reverse()
}

export function getEventType(event: Event): EventType {
  if (event.isAdditionalHoursEventType) {
    return EventType.additionalHoursEventType
  }
  if (event.isExpenseType) {
    return EventType.expenseType
  }
  return EventType.hoursEventType
}
