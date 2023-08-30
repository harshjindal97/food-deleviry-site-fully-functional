import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <div className='Navbar'>
        <div className='Navbar_heading'><h1>Night Food</h1></div>
        <div className='Navbar_elements'>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          
        </div>
        {/* <div className='Navbar_searctbox'>
          <div>search</div>
          <div><button>search</button></div>
        </div> */}
      </div>
    </div>
  )
}
