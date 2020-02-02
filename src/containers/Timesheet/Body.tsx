import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  inner: {
    // height: '800px',
    // backgroundColor: theme.colors.orange,
  },
}))

const Body: React.FC<{}> = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <div className={classes.inner}>
      <h3>Body</h3>
    </div>
  )
}

export default Body
