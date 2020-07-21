import React from 'react'
import Home from './components/Home'
import UsersList from './components/UsersList'

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

// import { Route }  from 'react-router-dom'

// const _OLD = () => {
//   return (
//     <div>
//       <Route exact path="/" component={ Home }/>
//       <Route path="/users" component={ UsersList }/>
//     </div>
//   )
// }