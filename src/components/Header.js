import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';  // Import the custom CSS file for styling

const Header = () => (
  <header className="animated-header">
    <nav>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="certificates" smooth={true} duration={500}>Certificates</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
