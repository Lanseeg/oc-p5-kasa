// src/components/Rating.js
import React from 'react';

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]; // 5 stars diplay

  return (
    <div className="rating">
      {stars.map(star => (
        <span key={star} className={`star ${star <= rating ? 'filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
