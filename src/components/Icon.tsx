import React from 'react'

import Theme from 'theme'
import { makeStyles } from '@material-ui/styles'

type Props = {
  name: string
  onClick?: () => void
}

const useStyles = makeStyles((theme: typeof Theme) => ({
  icon: {
    color: theme.iconColor,
    fontSize: theme.iconSize,
    transition: '.1s',
  },
  clickable: {
    padding: '2px',
    borderRadius: '3px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.gray1,
    },
  },
}))

const Icon: React.FC<Props> = ({ name, onClick }) => {
  const classes = useStyles()
  const iconClasses = ['material-icons', classes.icon]
  if (onClick) {
    iconClasses.push(classes.clickable)
  }
  return (
    <i className={iconClasses.join(' ')} onClick={onClick}>
      {name}
    </i>
  )
}

export default Icon
