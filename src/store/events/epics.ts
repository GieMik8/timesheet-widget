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
              const eventDate = moment(event.date).format('DD-MM-YYYY')
              const eventType = getEventType(event)
              const path = [eventDate, eventType]
              return acc.setIn(path, (acc.getIn(path) || List()).push(event.id))
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
