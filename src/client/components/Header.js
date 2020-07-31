import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const auth = useSelector(({ auth }) => auth)

  const authButton = auth ? 
    (<a href="/api/logout">Logout</a>)
    :
    (<a href="/api/login">Login</a>)

  return (
    <nav className="flex justify-between bg-red-400 p-4 text-white">
      <div className="text-2xl font-bold tracking-wide">
        <Link to="/">React SSR</Link>
      </div>
      <ul className="flex items-center justify-between">
        <li className="px-4"><Link to="/users">Users</Link></li>
        <li className="px-4"><Link to="/admins">Admins</Link></li>
        <li className="px-4">{ authButton }</li>
      </ul>
    </nav>
  )
}

export default Header