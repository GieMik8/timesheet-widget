import React, { useState, useEffect } from 'react'
import moment, { Moment } from 'moment'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import Theme from 'theme'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { makeStyles, useTheme } from '@material-ui/styles'
import { getLast7Days } from 'utils'

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
  const theme = useTheme()
  const classes = useStyles(theme)
  const [days] = useState(getLast7Days())
  const [selectedDay, setSelectedDay] = useState<Moment>(days[6])
  const [currentDay] = useState<Moment>(moment())

  const location = useLocation()

  useEffect(() => {
    const { date } = queryString.parse(location.search)
    setSelectedDay(date ? moment(date) : moment())
  }, [location])

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Header currentDay={currentDay} days={days} selectedDay={selectedDay} />
      </div>
      <div className={classes.body}>
        <Body selectedDay={selectedDay} />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Timesheet
