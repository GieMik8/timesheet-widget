import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

type Props = {
  onClick?: () => void
}

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    backgroundColor: theme.colors.gray1,
    padding: '20px',
  },
  button: {
    backgroundColor: theme.colors.orange,
    padding: '10px 20px',
    borderRadius: '5px',
    color: theme.colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: theme.fontSize1,
    width: '100%',
  },
}))

const Footer: React.FC<Props> = ({ onClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <button className={classes.button} onClick={onClick}>
        Add Task
      </button>
    </div>
  )
}

export default Footer
