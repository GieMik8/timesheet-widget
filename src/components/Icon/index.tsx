import React from 'react'

import useStyles from './style'

type Props = {
  name: string
  onClick?: () => void
}

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
