import React from "react";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Kasa, chez vous, partout et ailleurs" />
      <span className="banner__txt">{text}</span>
    </div>
  );
}

export default Banner;