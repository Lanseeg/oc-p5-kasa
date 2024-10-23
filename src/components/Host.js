// src/components/Host.js
import React from "react";
import '../styles/components/_host.scss';

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <p>{name}</p>
      <img src={picture} alt={`Portrait de ${name}`} className="host__picture" />
    </div>
  );
};

export default Host;
