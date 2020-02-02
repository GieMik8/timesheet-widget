import moment, { Moment } from 'moment'

export function getLast7Days(): Array<Moment> {
  return [...Array(7).keys()].map((day: number) => moment().subtract(day, 'd')).reverse()
}
