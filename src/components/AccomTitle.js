// src/components/AccomTitle.js
import React from 'react';

const AccomTitle = ({ title, location }) => {
  return (
    <div className="accom-title">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
};

export default AccomTitle;
