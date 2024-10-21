// src/pages/Home.js
import React from "react";
import Banner from "../components/Banner";
import homeBanner from "../assets/images/homebanner.png";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
      <Banner text="Chez vous, partout et ailleurs" image={homeBanner} />
      </div>
      <Gallery />
    </div>
  );
};

export default Home;
