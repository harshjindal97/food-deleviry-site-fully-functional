import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <div className='Navbar'>
        <div className='Navbar_heading'><h1>Night Food</h1></div>
        
          <div><Link to="/">Home</Link></div>
          <div className='navbar_login'><Link className='btn bg-white mx-1 text-success' to="/Login">Login</Link>
          <Link className='btn bg-white mx-1 text-success' to="/Signup">Signup</Link></div>
          
        
        {/* <div className='Navbar_searctbox'>
          <div>search</div>
          <div><button>search</button></div>
        </div> */}
      </div>
    </div>
  )
}
