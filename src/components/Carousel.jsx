import React, { useState } from "react";
import PropTypes from "prop-types";
import "../assets/scss/components/Carousel.scss"

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePreviousClick = () => {
    const previousImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(previousImage);
  };

  const handleNextClick = () => {
    const nextImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(nextImage);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button previous" onClick={handlePreviousClick}>
        &lt;
      </button>
      <img src={images[currentImage]} alt={`Image ${currentImage}`} className="carousel-image" />
      <button className="carousel-button next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Carousel;