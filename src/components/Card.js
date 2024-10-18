import React from 'react';

function Card({ image, title }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className="card__title">{title}</h2>
    </div>
  );
}

export default Card;
