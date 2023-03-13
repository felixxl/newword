import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/components/NavBar.scss';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink exact to="/Index" className="navbar-logo">
          <div className="logo-image">
            <img src={logo} alt="Logo" class="imghead" />
          </div>
        </NavLink>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink exact to="/index" activeClassName="active" className="navbar-link">
              Accueil
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/chambre" activeClassName="active" className="navbar-link">
              Chambre
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/activites" activeClassName="active" className="navbar-link">
              Activités
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/univers" activeClassName="active" className="navbar-link">
              Univers
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;