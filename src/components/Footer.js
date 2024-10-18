// src/components/Footer.js
import React from 'react';
import logobw from "../assets/images/logobw.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='kasa_footer'>
      <img
        className="footer__logo"
        src={logobw}
        alt="Logo de Kasa, site de location immobilière"
        title="Kasa, chez vous, partout et ailleurs."
      />
      <p className='footer__text'>© 2024 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
