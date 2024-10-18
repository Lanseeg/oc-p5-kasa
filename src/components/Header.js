// src/components/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="kasa-header">
      <div className="kasa-header-content">
        <NavLink to="/">
          <img
            className="kasa-logo"
            src={logo}
            alt="Logo de Kasa, site de location immobilière"
            title="Kasa, site de location immobilière"
          />
        </NavLink>
        <nav className="kasa-nav">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
