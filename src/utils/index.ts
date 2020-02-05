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

export function getTasksInterval(
  events: Event[],
): { firstTaskStart: number | null; lastTaskEnd: number | null } {
  let firstTaskStart = null
  let lastTaskEnd = null
  for (const event of events) {
    if (event.firstTaskStart) {
      if (!firstTaskStart || event.firstTaskStart.getTime() < firstTaskStart) {
        firstTaskStart = event.firstTaskStart.getTime()
      }
    }
    if (event.lastTaskEnd) {
      if (!lastTaskEnd || event.lastTaskEnd.getTime() > lastTaskEnd) {
        lastTaskEnd = event.lastTaskEnd.getTime()
      }
    }
  }
  return { firstTaskStart, lastTaskEnd }
}
