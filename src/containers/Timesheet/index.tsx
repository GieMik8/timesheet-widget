import React, { useState, useEffect, useCallback } from 'react'
import moment, { Moment } from 'moment'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getLast7Days } from 'utils'
import { useDispatch } from 'react-redux'

import Actions from 'store/root-action'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import useStyles from './style'

const Timesheet: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const classes = useStyles()

  const { date } = queryString.parse(location.search)
  const [days] = useState(getLast7Days())
  const [currentDay] = useState<Moment>(moment())

  useEffect(() => {
    dispatch(Actions.events.getEventsAsync.request())
  }, [dispatch])

  const selectedDay = date ? moment(date) : days[6]

  const addTask = useCallback(() => {
    alert(`Add task: ${selectedDay}`)
  }, [selectedDay])

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Header currentDay={currentDay} days={days} selectedDay={selectedDay} />
      </div>
      <div className={classes.body}>
        <Body selectedDay={selectedDay} />
      </div>
      <div className={classes.footer}>
        <Footer onClick={addTask} />
      </div>
    </div>
  )
}

export default Timesheet
