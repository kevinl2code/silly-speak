import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css"

const Navbar = () => {
    useEffect(() => {
        const sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    })

    return(
        <React.Fragment>
        <nav>
            <div className="nav-wrapper">
                <a href="/#" className="brand-logo">Silly Speak</a>
                <a href="/#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/translate">Translator</Link></li>
                    <li><Link to="/facts">Facts</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
        {/* Need to figure out why mobile menu isn't collapsing on 
            navigation to About or Contact */}
        <ul id="slide-out" className="sidenav">
            <li><Link to="/translate">Translator</Link></li>
            <li><Link to="/facts">Facts</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </React.Fragment>
    )
}

export default Navbar