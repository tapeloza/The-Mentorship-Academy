import React from 'react';
import { Link } from 'react-router-dom';
import { ImageSlider } from './ImageSlider';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <h1 className="hero-title">
            <div className="mgw">
                <h6>Meet Greet Women</h6>
            </div>
            Empowering the next generation <br /><span className='female-leaders'>of female leaders</span>
          </h1>
          <ImageSlider compact />
          
          <p className="hero-description">
            Witness the transformative power of mentorship. Our community of driven women is rewriting the narrative of leadership across Africa, one connection at a time.
          </p>

          <div className="hero-cta-group">
            <Link to="/our-story" className="hero-btn hero-btn-primary">
              Learn more
            </Link>
            <Link to="/contact?interest=Joining%20a%20programme" className="hero-btn hero-btn-secondary">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
