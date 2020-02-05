import React from 'react'

import useStyles from './style'

type Props = {
  onClick?: () => void
}

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
