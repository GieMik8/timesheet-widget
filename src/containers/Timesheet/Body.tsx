import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'

import Theme from 'theme'
import { Moment } from 'moment'

const useStyles = makeStyles((theme: typeof Theme) => ({
  inner: {
    // height: '800px',
    // backgroundColor: theme.colors.orange,
  },
}))

const Body: React.FC<{ selectedDay: Moment }> = ({ selectedDay }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <div className={classes.inner}>
      <h3>Body</h3>
      <p>{selectedDay.format('YYYY-MM-DD')}</p>
    </div>
  )
}

export default Body
