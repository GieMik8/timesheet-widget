import React from 'react'
import { useDispatch } from 'react-redux'

import { getApiVersionAsync } from '../store/app/actions'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <span>Home</span>
      <button onClick={() => dispatch(getApiVersionAsync.request())}>Get Api Version</button>
    </div>
  )
}

export default Home
