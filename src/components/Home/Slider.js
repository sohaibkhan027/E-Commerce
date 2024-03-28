import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../Assets/banner_mens.png';
import image2 from '../Assets/banner_kids.png';
import image3 from '../Assets/banner_women.png';


const SliderCarousel = () => {
    const images = [image1, image2, image3];
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const onChange = index => {
      setCurrentSlide(index);
    };
  
    return (
      <div>
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} onChange={onChange}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          {/* <span>Current Slide: {currentSlide + 1}</span> */}
        </div>
      </div>
    );
  };
  
  export default SliderCarousel;
