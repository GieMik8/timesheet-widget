import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const Preview: React.FC = () => {
  const match = useRouteMatch()
  return (
    <div>
      <span>Settings</span>
      <Link to={`${match.url}/edit`}>Edit</Link>
    </div>
  )
}

export default Preview
