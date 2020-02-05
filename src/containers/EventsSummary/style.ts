import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    margin: '20px 0',
  },
  noEventsTitle: {
    backgroundColor: theme.colors.gray1,
    padding: '12px 16px',
    textAlign: 'center',
    display: 'block',
    margin: '20px 0 30px',
    color: theme.colors.gray,
  },
}))

export default useStyles
