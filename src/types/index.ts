enum EventType {
  Expense = 'expense',
  Hours = 'hours',
  AdditionalHours = 'additionalHours',
}

interface EventParams {
  date: Date
  quantity: number
  price: number
  eventType: EventType
  isWorkHour?: boolean
  isApproved?: boolean
  isRejected?: boolean
  tasksCount: number
  firstTaskStart: Date
  lastTaskEnd: Date
}

export class Event {
  date: Date
  quantity: number
  price: number
  eventType: EventType
  isExpenseType: boolean
  isHoursEventType: boolean
  isAdditionalHoursEventType: boolean
  isWorkHour: boolean
  isApproved: boolean
  isRejected: boolean
  tasksCount: number
  firstTaskStart: Date
  lastTaskEnd: Date
  constructor({
    date,
    quantity,
    price,
    eventType,
    isWorkHour = false,
    isApproved = false,
    isRejected = false,
    tasksCount,
    firstTaskStart,
    lastTaskEnd,
  }: EventParams) {
    this.date = date || new Date()
    this.quantity = quantity
    this.price = price
    this.eventType = eventType
    this.isExpenseType = eventType === EventType.Expense
    this.isHoursEventType = eventType === EventType.Hours
    this.isAdditionalHoursEventType = eventType === EventType.AdditionalHours
    this.isWorkHour = isWorkHour
    this.isApproved = isApproved
    this.isRejected = isRejected
    this.tasksCount = tasksCount
    this.firstTaskStart = firstTaskStart
    this.lastTaskEnd = lastTaskEnd
  }
}
