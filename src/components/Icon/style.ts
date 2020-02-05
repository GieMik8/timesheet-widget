import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

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

export default useStyles
