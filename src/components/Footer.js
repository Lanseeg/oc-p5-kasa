// src/components/Footer.js
import React from 'react';
import logobw from "../assets/images/logobw.png";

const Footer = () => {
  return (
    <footer>
      <img
        className="kasa-logo"
        src={logobw}
        alt="Logo de Kasa, site de location immobilière"
        title="Kasa, chez vous, partout et ailleurs."
      />
    </footer>
  );
};

export default Footer;
