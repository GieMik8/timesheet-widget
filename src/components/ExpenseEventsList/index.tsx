import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Event } from 'types'
import Theme from 'theme'
import { EventsListHeader, EventsListBody } from 'components'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {},
}))

const ExpenseEventsList: React.FC<{ events: Array<Event> }> = ({ events }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <EventsListHeader title="Expenses" icon="attach_money" />
      <EventsListBody
        header={['Type', 'Quantity', 'Total']}
        rows={events.map(event => [event.eventType, event.quantity, event.quantity * event.price!])}
      />
    </div>
  )
}

export default ExpenseEventsList
