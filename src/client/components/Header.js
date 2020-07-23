import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const auth = useSelector(({ auth }) => auth)
  console.log('auth: ', auth);

  const authButton = auth ? 
    (<a href="/api/logout">Logout</a>)
    :
    (<a href="/api/login">Login</a>)

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        { authButton }
      </div>
    </div>
  )
}

export default Header