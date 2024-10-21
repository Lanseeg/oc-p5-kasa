// src/components/Host.js
import React from 'react';

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <p>{name}</p>
      <img src={picture} alt={name} className="host__picture" />
    </div>
  );
};

export default Host;
