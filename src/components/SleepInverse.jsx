import React from 'react';
import "../assets/scss/components/Sleep.scss";
import SleepCarousel from './SleepCarousel';

const SleepInverse = ({ title, description, images }) => {
  return (
    <div className="sleep-container">
      <div className="sleep-text-wrapper">
        <h2 className="sleep-title">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="sleep-image-wrapper">
        <SleepCarousel images={images} />
      </div>
    </div>
  );
};

export default SleepInverse;