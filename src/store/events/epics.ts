import { Epic } from 'redux-observable'
import { empty } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions'

import * as Actions from './actions'

export const getEventsEpic: Epic<RootAction, RootAction, RootState, Services> = action$ =>
  action$.pipe(
    filter(isActionOf(Actions.getEventsAsync.request)),
    switchMap(() => empty()),
  )

export const getEventEpic: Epic<RootAction, RootAction, RootState, Services> = action$ =>
  action$.pipe(
    filter(isActionOf(Actions.getEventAsync.request)),
    switchMap(() => empty()),
  )
