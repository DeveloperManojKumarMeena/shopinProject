import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../store/actions/userAction'

const Navbar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <nav className='flex gap-2.5 bg-gray-800 text-white items-center justify-center text-2xl'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Product</NavLink>

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  )
}

export default Navbar
