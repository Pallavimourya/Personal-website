import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import btnimg from '../../assets/btnimg.png';
import Menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            
            {/* Desktop Menu */}
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass="active" to="certificates" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Certificates</Link>
            </div>

            {/* Desktop "Get in Touch" Button */}
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuBtn">
                <img src={btnimg} alt="Contact Icon" className="desktopMenuImg" />Get in Touch
            </Link>

            {/* Mobile Menu Icon */}
            <img src={Menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

            {/* Mobile Menu */}
            <div className={`navMenu ${showMenu ? 'show' : ''}`}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="certificates" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Certificates</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Get in Touch</Link>
            </div>
        </nav>
    );
}

export default Navbar;
