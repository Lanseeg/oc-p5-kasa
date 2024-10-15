// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
      <img
        className="kasa-logo"
        src={logo}
        alt="Logo de Kasa, site de location immobilière"
        title="Kasa, chez vous, partout et ailleurs."
      />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
