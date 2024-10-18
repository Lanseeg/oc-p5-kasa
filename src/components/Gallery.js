import React from "react";
import { Link } from "react-router-dom";
import accomodations from "../data/accomodations.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="gallery">
      {accomodations.map((accomodation) => {
        return (
          <article key={accomodation.id} className="gallery__container">
            <Link to={`/logement/${accomodation.id}`} className="gallery__container--link">
              <Card image={accomodation.cover} title={accomodation.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
