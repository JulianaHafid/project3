import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css';
const Nav = () => {
  return (
    <ul className='navbar-nav ml-auto'>
      <li className="col-md-4 nav-item active">
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' to='/login'>
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' to='/jobView'>
          Job Listing
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' to='/profile'>
          Profile
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav;
