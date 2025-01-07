import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>Contact</h1>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Contact