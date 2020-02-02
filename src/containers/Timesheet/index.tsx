import React, { useState, useEffect, useCallback } from 'react'
import moment, { Moment } from 'moment'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { makeStyles, useTheme } from '@material-ui/styles'
import { getLast7Days } from 'utils'
import { useDispatch } from 'react-redux'
// import { RootAction } from 'typesafe-actions'

import Theme from 'theme'
import Actions from 'store/root-action'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderColor: theme.colors.gray1,
  },
  body: {
    flexGrow: 1,
    overflow: 'scroll',
  },
  footer: {},
}))

const Timesheet: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const theme = useTheme()
  const classes = useStyles(theme)

  const { date } = queryString.parse(location.search)
  const [days] = useState(getLast7Days())
  const [selectedDay, setSelectedDay] = useState<Moment>(date ? moment(date) : days[6])
  const [currentDay] = useState<Moment>(moment())

  useEffect(() => {
    const { date } = queryString.parse(location.search)
    setSelectedDay(date ? moment(date) : moment())
  }, [location])

  useEffect(() => {
    dispatch(Actions.events.getEventsAsync.request())
  }, [dispatch])

  const addTask = useCallback(() => {
    console.log('addTask', selectedDay)
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
