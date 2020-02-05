import React from 'react'
import { Map } from 'immutable'
import { Moment } from 'moment'
import { useSelector } from 'react-redux'

import { EventType, STATE_DATE_FORMAT, EventsByIdMap } from 'types'
import { ExpenseEventsList, AdditionalHoursEventsList, HoursEventsList } from 'components'

import useStyles from './style'

const EventsSummary: React.FC<{ selectedDay: Moment }> = ({ selectedDay }) => {
  const classes = useStyles()
  const {
    events,
    eventsById,
  }: { events?: Map<string, any>; eventsById: EventsByIdMap } = useSelector((store: any) => ({
    eventsById: store.entities.get('events'),
    events: store.events.getIn(['eventsByDate', selectedDay.format(STATE_DATE_FORMAT)]),
  }))
  if (!events) {
    return <span className={classes.noEventsTitle}>No Events</span>
  }
  const additionalHoursTypeEvents = events.get(EventType.additionalHoursEventType)
  const expenseTypeEvents = events.get(EventType.expenseType)
  const hoursTypeEvents = events.get(EventType.hoursEventType)
  return (
    <div className={classes.wrapper}>
      {hoursTypeEvents && (
        <HoursEventsList
          events={events
            .get(EventType.hoursEventType)
            .map((eventId: string) => eventsById[eventId])}
        />
      )}
      {expenseTypeEvents && (
        <ExpenseEventsList
          events={events.get(EventType.expenseType).map((eventId: string) => eventsById[eventId])}
        />
      )}
      {additionalHoursTypeEvents && (
        <AdditionalHoursEventsList
          events={events
            .get(EventType.additionalHoursEventType)
            .map((eventId: string) => eventsById[eventId])}
        />
      )}
    </div>
  )
}

export default EventsSummary
