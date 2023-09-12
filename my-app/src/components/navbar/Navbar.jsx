import React , {useState} from 'react'

import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css';

export default function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <div className='Navbar'>
        <div className='Navbar_heading'><h1>Night Food</h1></div>
        
          <div className='Navbar_home margin'><Link to="/">Home</Link></div>
          <div className='navbar_login Navbar_links'><Link className='btn bg-white mx-1 text-success' to="/Login">Login</Link>
          <Link className='btn bg-white mx-1 text-success ' to="/Signup">Signup</Link></div>
          <div className='Navbar_menu' style={{zIndex:"4"}}>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false) }} /> :
                    <RiMenu3Line color='#fff' size={27} onClick={() => { setToggleMenu(true) }} />
                }
                {toggleMenu && (
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                            <p><Link className='btn bg-white mx-1 text-success ' to="/Login">Login</Link></p>
                            <p><Link className='btn bg-white mx-1 text-success ' to="/Signup">Signup</Link></p>
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
