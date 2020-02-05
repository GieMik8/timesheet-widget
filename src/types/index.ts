import uuid from 'uuid'

export enum EventType {
  expenseType = 'expenseType',
  hoursEventType = 'hoursEventType',
  additionalHoursEventType = 'additionalHoursEventType',
}

export enum DayEventsSummaryStatus {
  ok = 'OK',
  wrong = 'WRONG',
  neutral = 'NEUTRAL',
}

interface EventParams {
  date: Date
  quantity: number
  price: number | null
  eventType: string
  isExpenseType?: boolean
  isHoursEventType?: boolean
  isAdditionalHoursEventType?: boolean
  isWorkHour?: boolean
  isApproved?: boolean
  isRejected?: boolean
  tasksCount?: number
  firstTaskStart?: Date | null
  lastTaskEnd?: Date | null
}

export class Event {
  id: string
  date: Date
  quantity: number
  price: number | null
  eventType: string
  isExpenseType: boolean
  isHoursEventType: boolean
  isAdditionalHoursEventType: boolean
  isWorkHour: boolean
  isApproved: boolean
  isRejected: boolean
  tasksCount: number
  firstTaskStart: Date | null
  lastTaskEnd: Date | null
  constructor({
    date,
    quantity,
    price,
    eventType,
    isExpenseType = false,
    isHoursEventType = false,
    isAdditionalHoursEventType = false,
    isWorkHour = false,
    isApproved = false,
    isRejected = false,
    tasksCount = 1,
    firstTaskStart = null,
    lastTaskEnd = null,
  }: EventParams) {
    this.id = uuid()
    this.date = date || new Date()
    this.quantity = quantity
    this.price = price
    this.eventType = eventType
    this.isExpenseType = isExpenseType
    this.isHoursEventType = isHoursEventType
    this.isAdditionalHoursEventType = isAdditionalHoursEventType
    this.isWorkHour = isWorkHour
    this.isApproved = isApproved
    this.isRejected = isRejected
    this.tasksCount = tasksCount
    this.firstTaskStart = firstTaskStart
    this.lastTaskEnd = lastTaskEnd
  }
}

export const STATE_DATE_FORMAT = 'DD-MM-YYYY'
