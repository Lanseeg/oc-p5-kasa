// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
      </div>
      <div className="gallery">
        <h3>
          <Link to="/accomodation">Locations</Link>
        </h3>
      </div>
    </div>
  );
};

export default Home;
