import React , {useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css';
export default function Navbar() {

const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = ()=> {
    localStorage.removeItem("authToken");
    navigate("/");
  }

  return (
    <div>
      <div className='Navbar'>
        <div className='Navbar_heading'><h1>Night Food</h1></div>
        
          <div className='Navbar_home margin'><Link to="/">Home</Link></div>
          {
            (localStorage.getItem("authToken"))?
            <div className='Navbar_myorder'>
              <Link to="/order">MyOrder</Link>
            </div>
            :""
          }

          {(!localStorage.getItem("authToken"))?
          <div className='navbar_login Navbar_links'><Link className='btn bg-white mx-1 text-success' to="/Login">Login</Link>
          <Link className='btn bg-white mx-1 text-success' to="/Signup">Signup</Link></div>:
          <div className='navbar_login Navbar_links'>
            <div className='btn bg-white mx-1 text-success'>
              MyCart
            </div>
            <div className='btn bg-white mx-1 text-danger' onClick={handleLogout}>
              Logout
            </div>
          </div>
          }
          <div className='Navbar_menu' style={{zIndex:"4"}}>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false) }} /> :
                    <RiMenu3Line color='#fff' size={27} onClick={() => { setToggleMenu(true) }} />
                }
                {toggleMenu && (
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                            <p><Link className='mx-1 text-success ' to="/Login">Login</Link></p>
                            <p><Link className='mx-1 text-success ' to="/Signup">Signup</Link></p>
                        </div>

                    </div>
                )}
            </div>
        
        {/* <div className='Navbar_searctbox'>
          <div>search</div>
          <div><button>search</button></div>
        </div> */}
      </div>
    </div>
  )
}
