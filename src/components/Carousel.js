import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/_carousel.scss';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
  const totalImages = images.length;

  // Gestion du clic sur la flèche droite
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages); // Loop after last image
  };

  // Left click handling
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {/* Image container with translation */}
      <div
        className="carousel__track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Horizontal scrolling
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="carousel__image"
          />
        ))}
      </div>

      {/* Display images only if several arrows */}
      {totalImages > 1 && (
        <>
          <button className="carousel__arrow left" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} /> {/* Left arrow */}
          </button>
          <button className="carousel__arrow right" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} /> {/* Right arrow */}
          </button>
        </>
      )}

      {/* Display index */}
      {totalImages > 1 && (
        <div className="carousel__counter">
          {currentIndex + 1}/{totalImages}
        </div>
      )}
    </div>
  );
};

export default Carousel;
