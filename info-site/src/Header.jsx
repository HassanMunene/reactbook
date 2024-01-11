import React from 'react';
import logo from './assets/react.svg'

function Header () {
    return (
        <header className="nav-container">
            <nav className="navbar">
                <img src={logo} alt="react-logo" className="nav-logo"/>
                <ul className="nav-items">
                    <li className="item">Pricing</li>
                    <li className="item">About</li>
                    <li className="item">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
