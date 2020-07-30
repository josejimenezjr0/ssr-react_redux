import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAdmins } from '../actions/actionGenerators'

const AdminsListPage = () => {
  const admins = useSelector(state => state.admins)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useEffect Admins before dispatch');
    dispatch(fetchAdmins())
  }, [])

  const renderAdmins = admins.map( admin => <li key={ admin.id }>{ admin.name }</li> )

  return (
    <div>
      <span className="text-6xl">Protected list of admins</span>
      <ul>
        { renderAdmins }
      </ul>
    </div>
  )
}

const loadData = store => store.dispatch(fetchAdmins())

export default { 
  component: AdminsListPage,
  loadData
}