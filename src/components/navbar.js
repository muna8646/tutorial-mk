import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/logo_transparent.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={LOGO} alt="Esipil computer center logo" />
            Esipil computer center
          </Link>
        </div>
        <ul className={`links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="action_btn" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Buildyourwebsite" className="action_btn" onClick={closeMenu}>
              Build your website
            </Link>
          </li>
          <li>
            <Link to="/Student" className="action_btn" onClick={closeMenu}>
              Student
            </Link>
          </li>
          <li>
            <Link to="/Mentors" className="action_btn" onClick={closeMenu}>
              Mentors
            </Link>
          </li>
          <li>
            <Link to="/About" className="action_btn" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="action_btn" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <Link to="/Apply now" className="action_btt" onClick={closeMenu}>
          Get started
        </Link>
        </ul>
        
        <div className="toggle_btn" onClick={toggleMenu}>
          {isOpen ? <ClearIcon /> : <ReorderIcon />}
        </div>
        {isOpen && (
          <div className="dropdown_menu">
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Buildyourwebsite" onClick={closeMenu}>
                  Build your website
                </Link>
              </li>
              <li>
                <Link to="/Student" onClick={closeMenu}>
                  Student
                </Link>
              </li>
              <li>
                <Link to="/Mentors" onClick={closeMenu}>
                  Mentors
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/apply now" className="action_btn" onClick={closeMenu}>
                  Get started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
