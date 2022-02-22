import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel showArrows={false} showStatus={false} showThumbs={false}>
      <div>
        <img src="/images/iphone13.webp" />
      </div>
      <div>
        <img src="/images/Imac24.webp" />
      </div>
      <div>
        <img src="/images/Page1.webp" />
      </div>
      <div>
        <img src="/images/two.webp" />
      </div>
    </Carousel>
  );
};

export default Slider;
