import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'

import Theme from 'theme'
import { Moment } from 'moment'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  weekday: {
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 0,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.colors.orange,
    fontSize: theme.fontSize1,
    padding: '5px',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: theme.colors.orange,
      color: theme.colors.white,
      cursor: 'pointer',
    },
  },
}))

const Body: React.FC<{ selectedDay: Moment }> = ({ selectedDay }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <div className={classes.wrapper}>
      <div>
        <span className={classes.weekday}>{selectedDay.format('dddd')}</span>
        <span> {selectedDay.format('DD.MM.YYYY')}</span>
      </div>
      <div>
        <button className={classes.button}>Go to timesheet</button>
      </div>
    </div>
  )
}

export default Body
