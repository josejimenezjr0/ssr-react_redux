import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchUsers from '../actions/fetchUsers'

const UsersList = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
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

export default UsersList


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