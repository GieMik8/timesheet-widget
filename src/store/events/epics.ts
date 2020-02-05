import { Map, List } from 'immutable'
import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions'
import { normalize } from 'normalizr'
import moment from 'moment'

import { Event } from 'types'
import { eventList } from './schema'
import * as Actions from './actions'
import { updateEntities } from 'store/entities/actions'
import { getEventType } from 'utils'
import { STATE_DATE_FORMAT } from 'types'

export const getEventsEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { api },
) =>
  action$.pipe(
    filter(isActionOf(Actions.getEventsAsync.request)),
    switchMap(() =>
      api.events.getEvents().pipe(
        switchMap(res => {
          const normalizedEvents = normalize(res, eventList)
          const eventsByDate: Map<string, any> = res.reduce(
            (acc: Map<string, any>, event: Event) => {
              const eventDate = moment(event.date).format(STATE_DATE_FORMAT)
              const eventType = getEventType(event)
              const path = [eventDate, eventType]
              const targetDateEventsList = acc.getIn(path) || List()
              if (event.isRejected) {
                const rejectedTasks = acc.getIn([eventDate, 'rejectedTasks']) || 0
                acc = acc.setIn([eventDate, 'rejectedTasks'], rejectedTasks + event.tasksCount)
              }
              if (!event.isApproved) {
                const notApprovedTasks = acc.getIn([eventDate, 'tasksNotApproved']) || 0
                acc = acc.setIn(
                  [eventDate, 'tasksNotApproved'],
                  notApprovedTasks + event.tasksCount,
                )
              }
              if (event.isWorkHour) {
                const workHours = acc.getIn([eventDate, 'workHours']) || 0
                acc = acc.setIn([eventDate, 'workHours'], workHours + event.quantity)
              }
              const tasksCount = acc.getIn([eventDate, 'tasksCount']) || 0
              acc = acc
                .setIn(path, targetDateEventsList.push(event.id))
                .setIn([eventDate, 'tasksCount'], tasksCount + event.tasksCount)
              return acc
            },
            Map(),
          )
          return of(
            updateEntities(normalizedEvents.entities),
            Actions.getEventsAsync.success({
              eventsByDate,
              eventsList: List(normalizedEvents.result),
            }),
          )
        }),
      ),
    ),
  )
