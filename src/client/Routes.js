import React from 'react'
import HomePage from './pages/HomePage'
import UsersListPage, { loadData } from './pages/UsersListPage'

export default [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersListPage
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