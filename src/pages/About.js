// src/pages/Home.js
import React from 'react';
import Banner from "../components/Banner";
import aboutBanner from "../assets/images/aboutbanner.png";
import Collapse from "../components/Collapse";
import aboutData from '../data/about.json';

const About = () => {
  return (
    <div className='about'>
      <Banner text="" image={aboutBanner} />
    <div className="about__collapse">
      {aboutData.map((value) => (
        <Collapse key={value.id} title={value.title} content={value.content} />
      ))}
    </div>
    </div>
  );
};

export default About;
