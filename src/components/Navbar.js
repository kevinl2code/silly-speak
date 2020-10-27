import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="localhost:3000" className="brand-logo">Silly Speak</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/translate">Translator</Link></li>
                    <li><Link to="/facts">Facts</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
      </nav>
    )
}

export default Navbar