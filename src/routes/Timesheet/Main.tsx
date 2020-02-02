import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'

import Theme from 'theme'
import { Timesheet } from 'containers'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '600px',
  },
  content: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius,
    width: '400px',
    height: '600px',
    boxShadow: theme.boxShadow,
  },
}))

const Preview: React.FC = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Timesheet />
      </div>
    </div>
  )
}

export default Preview
