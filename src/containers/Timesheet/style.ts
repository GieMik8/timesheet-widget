import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderColor: theme.colors.gray1,
  },
  body: {
    flexGrow: 1,
    overflow: 'scroll',
  },
  footer: {},
}))

export default useStyles
