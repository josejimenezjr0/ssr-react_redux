import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../actions/actionGenerators'
import { Helmet } from 'react-helmet-async'

const UsersListPage = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const renderUsers = users.map( user => <li key={ user.id }>{ user.name }</li> )

  const head = (
    <Helmet>
      <title>{`${users.length} Users Loaded`}</title>
      <meta property="og:title" content="Users App" />
    </Helmet>
  )

  return (
    <div>
    {head}
      Here's a big list of users:
      <ul>
        { renderUsers }
      </ul>
    </div>
  )
}

const loadData = store => store.dispatch(fetchUsers())

export default { 
  component: UsersListPage,
  loadData
}