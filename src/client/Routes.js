import React from 'react'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
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