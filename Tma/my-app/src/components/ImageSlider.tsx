import React from 'react';
import './ImageSlider.css';
import images1 from '../assets/images1.jpg';
import images2 from '../assets/images2.jpg';
import images3 from '../assets/images3.jpg';
import images4 from '../assets/images4.jpg';
import images5 from '../assets/images5.jpg';
import images6 from '../assets/images6.jpg';
import images7 from '../assets/images7.jpg';
import images8 from '../assets/images8.jpg';
import images9 from '../assets/images9.jpg';
import images10 from '../assets/images10.jpg';
import images11 from '../assets/images11.jpg';
import images12 from '../assets/images12.jpg';


type ImageSliderProps = { compact?: boolean };

export const ImageSlider: React.FC<ImageSliderProps> = ({ compact = false }) => {
  // Array of your sliding card images
  const images = [images1,images2,images3,images4,images5,images6,images7,images8,images9,images10,images11,images12,];
  
  return (
    
    <div className={`slider-section ${compact ? 'slider-section-compact' : ''}`}>
      {!compact && <div className='slider-title'><h1>Together we go far</h1>
      <p>Your network is your networth, Connect industry leaders and take to your career to the next level</p></div>}
      <div className="marquee">
        {/* We duplicate the track items once to achieve the infinite seamless loop effect */}
        <div className="marquee-track">
          {images.concat(images).map((imgSrc, index) => (
            <div className="marquee-card" key={index}>
              <img src={imgSrc} alt={`Slide item ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
