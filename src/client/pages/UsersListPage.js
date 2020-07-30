import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../actions/actionGenerators'

const UsersListPage = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useEffect Users before dispatch');
    dispatch(fetchUsers())
  }, [])

  const renderUsers = users.map( user => <li key={ user.id }>{ user.name }</li> )

  return (
    <div>
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

// import { connect } from 'react-redux'

// const UsersList = ({ fetchUsers, users }) => {
//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   const renderUsers = users.map( user => <li key={ user.id }>{ user.name }</li> )

//   return (
//     <div>
//       Here's a big list of users:
//       <ul>
//         { renderUsers }
//       </ul>
//     </div>
//   )
// }

// const mapStateToProps = state => ({ users: state.users })

// export default connect(mapStateToProps, { fetchUsers })(UsersList)