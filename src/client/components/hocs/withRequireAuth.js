import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

const withRequireAuth = ChildComponent => props => {
  const auth = useSelector(state => state.auth)

  const mapping = {
    [false]: <Redirect to="/" />,
    [null]: <div>Loading...</div>
  }

  return (mapping[auth] || <ChildComponent {...props}/>)
}

export default withRequireAuth