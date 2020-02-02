import React, { useCallback } from 'react'
import { Moment } from 'moment'
import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

type Props = {
  date: Moment
  onClick?: (date: string) => void
  selected?: boolean
  currentDay?: boolean
}

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    transition: '.2s',

    '&:hover': {
      backgroundColor: theme.colors.gray1,
      cursor: 'pointer',
    },
  },
  header: {
    fontSize: theme.fontSize2,
    marginBottom: '10px',
  },
  body: {
    fontSize: theme.fontSize2,
    fontWeight: 'bold',
    marginBottom: '10px',
    borderWidth: '1px',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: '3px',
    padding: '4px',
    transition: '.2s',

    '&.current-day': {
      borderColor: theme.colors.orange,
    },

    '&.selected-day': {
      borderColor: theme.colors.orange,
      backgroundColor: theme.colors.orange,
      color: theme.colors.white,
    },
  },
  footer: {},
}))

const DateCard: React.FC<Props> = ({ date, onClick, selected = false, currentDay = false }) => {
  const classes = useStyles()
  const onDateClick = useCallback(() => {
    if (onClick) {
      onClick(date.format('YYYY-MM-DD'))
    }
  }, [onClick, date])

  let bodyClasses = classes.body

  if (currentDay) {
    bodyClasses += ' current-day'
  }

  if (selected) {
    bodyClasses += ' selected-day'
  }

  return (
    <div onClick={onDateClick} className={classes.wrapper}>
      <span className={classes.header}>{date.format('ddd')}</span>
      <span className={bodyClasses}>{date.format('DD')}</span>
      <span className={classes.footer}>-</span>
    </div>
  )
}

export default DateCard
