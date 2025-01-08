import React from 'react';
import  './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
        <nav className='navbar'>
        <h1 className=''>Nav</h1>
          <ul>
            <li>
              <Link to="/home" className='link'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='link'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='link'>Contact</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Nav