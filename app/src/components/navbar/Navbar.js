import React from 'react'
import logo from '../../assets/Asset 1.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            
            <div className="container">
            <a href="#"><img src={logo} alt="women techno hub" /></a>
            <ul>
            <li><a href="#" className="current">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar
