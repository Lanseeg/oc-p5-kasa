// src/pages/Accomodation.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import accomodations from '../data/accomodations.json';
import Carousel from '../components/Carousel';
import AccomTitle from '../components/AccomTitle';
import Host from '../components/Host';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

const Accomodation = () => {
  const { id } = useParams(); // ID from URL
  const accomodation = accomodations.find(accomodation => accomodation.id === id);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page (fix)
  }, []);

  // if none found
  if (!accomodation) {
    return <div>Accomodation not found</div>;
  }

  return (
    <div className="accomodation">
      <Carousel images={accomodation.pictures} /> {/* Carousel */}
      <div className="accomodation__details">
        <AccomTitle title={accomodation.title} location={accomodation.location} />
        <Host name={accomodation.host.name} picture={accomodation.host.picture} />
        <Tags tags={accomodation.tags} />
        <Rating rating={accomodation.rating} />
      </div>
      <div className="accomodation__collapses">
        <Collapse title="Description" content={accomodation.description} />
        <Collapse title="Équipements" content={accomodation.equipments.join(', ')} />
      </div>
    </div>
  );
};

export default Accomodation;
