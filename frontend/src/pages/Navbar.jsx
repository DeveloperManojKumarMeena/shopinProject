import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex gap-2.5 bg-gray-800 text-white items-center justify-center text-2xl'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/products"}>Product</NavLink>
    </nav>
  )
}

export default Navbar