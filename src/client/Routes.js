import React from 'react'
// import { Route }  from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/UsersList'

//for reference only and uncommented for syntax highlighting
const _OLD = () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={UsersList}/>
    </div>
  )
}

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList
  }
]