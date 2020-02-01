import React from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from '@material-ui/styles'

import { getApiVersionAsync } from '../store/app/actions'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  console.log({ theme })
  return (
    <div>
      <span>Home</span>
      <button onClick={() => dispatch(getApiVersionAsync.request())}>Get Api Version</button>
    </div>
  )
}

export default Home
