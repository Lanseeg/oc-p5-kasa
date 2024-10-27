import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/_carousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel__track"
        style={{
          transform: `translateX(-${currentIndex * (100 / totalImages)}%)`,
          width: `${100 * totalImages}%`, // Track width covers all images.
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="carousel__image"
            style={{ width: `${100 / totalImages}%` }} // Each image occupies its portion of the track.
          />
        ))}
      </div>

      {totalImages > 1 && (
        <>
          <button className="carousel__arrow left" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel__arrow right" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      {totalImages > 1 && (
        <div className="carousel__counter">
          {currentIndex + 1}/{totalImages}
        </div>
      )}
    </div>
  );
};

export default Carousel;
