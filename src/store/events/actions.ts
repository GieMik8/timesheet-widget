import { createAsyncAction } from 'typesafe-actions'

export const getEventsAsync = createAsyncAction(
  'GET_EVENTS_REQUEST',
  'GET_EVENTS_SUCCESS',
  'GET_EVENTS_FAILURE',
)<undefined, string, string>()

export const getEventAsync = createAsyncAction(
  'GET_EVENT_REQUEST',
  'GET_EVENT_SUCCESS',
  'GET_EVENT_FAILURE',
)<undefined, string, string>()
