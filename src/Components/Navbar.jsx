import React from 'react'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='containerNavbar'>
        <div className='logo'>
            <h1>Iaka Azkiano.</h1>
        </div>

        <div className="navbar">
            <ul>
                <li>
                    <a href="#">About Me</a>
                </li>
                <li>
                    <a href="#">My Blog</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
            </ul>
        </div>
        

    </nav>
  )
}

export default Navbar