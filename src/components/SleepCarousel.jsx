import React, { useState, useEffect } from "react";
import "../assets/scss/components/SleepCarousel.scss";

const SleepCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="sleep-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Sleep first ${index}`}
          className={`sleep-carousel-image ${index === currentImage ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default SleepCarousel;