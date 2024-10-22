// src/components/Rating.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]; // 5 stars display

  return (
    <div className="rating">
      {stars.map(star => (
        <span key={star} className={`star ${star <= rating ? 'filled' : ''}`}>
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  );
};

export default Rating;
