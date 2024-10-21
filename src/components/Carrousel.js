// src/components/Carrousel.js
import React from 'react';

const Carrousel = ({ images }) => {
  return (
    <div className="carousel">
      {/* carrousel logic */}
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Accomodation ${index + 1}`} />
      ))}
    </div>
  );
};

export default Carrousel;
