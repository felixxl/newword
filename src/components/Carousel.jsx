import React, { useState, useEffect } from "react";
import "../assets/scss/components/Carousel.scss";
import { getCarouselImages } from "../services/carouselService";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      const carouselImages = await getCarouselImages();
      setImages(carouselImages);
    };

    getImages();
  }, []);

  const handlePreviousClick = () => {
    const previousImage =
      currentImage === 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(previousImage);
  };

  const handleNextClick = () => {
    const nextImage =
      currentImage === images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(nextImage);
  };
  console.log('Image data:', images);
console.log('Current image file path:', images.length > 0 ? images[currentImage].file_path.substring(2) : '');

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <button
          className="carousel-button previous"
          onClick={handlePreviousClick}
        >
          &lt;
        </button>
        {images.length > 0 && (
          <>
          <img
            src={`http://localhost:8000/api/carousel/upload?path=${images[currentImage].file_path.replace('upload/', '')}`}
            alt={`${currentImage}`}
            className="carousel-image"
          />

            <div className="carousel-title">{images[currentImage].title}</div>
          </>
        )}
        <button className="carousel-button next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};


export default Carousel;