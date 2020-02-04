import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Map } from 'immutable'
import { Moment } from 'moment'
import { useSelector } from 'react-redux'

import Theme from 'theme'
import { EventType } from 'types'

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
    events: store.events.getIn(['eventsByDate', selectedDay.format('DD-MM-YYYY')]),
  }))
  console.log({ selectedDay, events, eventsById })
  if (!events) {
    return null
  }
  console.log(events.get(EventType.additionalHoursEventType))
  console.log(events.get(EventType.expenseType))
  console.log(events.get(EventType.hoursEventType))
  return (
    <div className={classes.wrapper}>
      <p>EventsSummary</p>
    </div>
  )
}

export default EventsSummary
