import React from 'react'

import Theme from 'theme'
import { makeStyles } from '@material-ui/styles'

type Props = {
  name: string
  color?: string
  size?: string
}

const useStyles = makeStyles((theme: typeof Theme) => ({
  icon: {
    color: theme.iconColor,
    fontSize: theme.iconSize,
  },
}))

const Icon: React.FC<Props> = ({ name }) => {
  const classes = useStyles()
  return <i className={`material-icons ${classes.icon}`}>{name}</i>
}

export default Icon
