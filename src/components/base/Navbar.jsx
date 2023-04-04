import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/components/NavBar.scss';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink exact="true" to="/" className="navbar-logo">
          <div className="logo-image">
            <img src={logo} alt="Logo" className="imghead" />
          </div>
        </NavLink>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink exact="true" to="/" activeclassname="active" className="navbar-link">
              Accueil
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/chambre" activeclassname="active" className="navbar-link">
              Chambres
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/activites" activeclassname="active" className="navbar-link">
              Activités
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/univers" activeclassname="active" className="navbar-link">
              Univers
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;