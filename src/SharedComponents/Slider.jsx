import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  { url: "images/bnr1.jpg" },
  { url: "images/bnr2.jpg" },
  { url: "images/bn3.jpg" },
];

const SliderT = () => {
  return (
    <div className="slider-container">
      <Carousel
        autoPlay={true}
        interval={2000} // Auto-slide every 3 seconds (adjust as needed)
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
               
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderT;
