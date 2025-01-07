import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='space'>
        <h1>Nav</h1>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Nav