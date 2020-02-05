import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    padding: '15px 12px',
  },
  table: {
    width: '100%',

    '& th': {
      color: theme.colors.gray,
      fontSize: theme.fontSize2,
      fontWeight: 'normal',
    },

    '& td': {
      color: theme.colors.gray,
      fontSize: theme.fontSize3,
      fontWeight: 'bold',
    },

    '& td, & th': {
      textAlign: 'left',
    },

    '& td + td, & th + th': {
      textAlign: 'right',
    },
  },
}))

export default useStyles
