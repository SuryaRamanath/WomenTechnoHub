import React, { useEffect, useState } from 'react'
import logo from '../../assets/Asset 1.png';
import './Navbar.css'



import { HashLink as Link } from 'react-router-hash-link'
import About from '../about/About';
import Footer from '../footer/Footer';

const Navbar = () => {

    const [click, setClick] = useState(false);
  const [navShrink, setnavShrink] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const shrinkNavbar = () => {
    if(window.scrollY > 100) {
      setnavShrink(true)
    } else if(window.scrollY < 20) {
      setnavShrink(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', shrinkNavbar)

  }, [])

    return (
        <div className='navbar' id="home">
            
            <nav className={navShrink ? 'navbar navbar-shrink': 'navbar'}>
            <a href="/"><img src={logo} alt="women techno hub" /></a>

           
            <ul className={click ? 'nav-menu active' : "nav-menu"}>
            <li className="nav-item" onClick={closeMobileMenu}><Link to='#' smooth>Home</Link></li>
            <li className="nav-item" onClick={closeMobileMenu}><Link to='#about' smooth>About</Link></li>
            <li className="nav-item" onClick={closeMobileMenu}><Link to='#contact' smooth>Contact</Link></li>
         
            
            </ul>
            

            <div className={click ? 'hamburger active' : 'hamburger'} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </nav>
        </div>
    )
}

export default Navbar
