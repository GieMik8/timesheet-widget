import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/styles'

import Theme from 'theme'

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
    boxShadow: theme.boxShadow,
  },
}))

const Preview: React.FC = () => {
  const theme = useTheme()
  const match = useRouteMatch()
  const classes = useStyles(theme)
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h2>wrapped</h2>
      </div>
    </div>
  )
}

export default Preview
