import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Map } from 'immutable'
import { Moment } from 'moment'
import { useSelector } from 'react-redux'

import Theme from 'theme'
import { EventType, STATE_DATE_FORMAT } from 'types'
import { ExpenseEventsList, AdditionalHoursEventsList, HoursEventsList } from 'components'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {},
}))

const EventsSummary: React.FC<{ selectedDay: Moment }> = ({ selectedDay }) => {
  const classes = useStyles()
  const {
    events,
    eventsById,
  }: { events?: Map<string, any>; eventsById: Array<Event> } = useSelector((store: any) => ({
    eventsById: store.entities.get('events'),
    events: store.events.getIn(['eventsByDate', selectedDay.format(STATE_DATE_FORMAT)]),
  }))
  if (!events) {
    return <span>No Events</span>
  }
  const additionalHoursTypeEvents = events.get(EventType.additionalHoursEventType)
  const expenseTypeEvents = events.get(EventType.expenseType)
  const hoursTypeEvents = events.get(EventType.hoursEventType)
  return (
    <div className={classes.wrapper}>
      {additionalHoursTypeEvents && <AdditionalHoursEventsList />}
      {expenseTypeEvents && <ExpenseEventsList />}
      {hoursTypeEvents && <HoursEventsList />}
    </div>
  )
}

export default EventsSummary
