import React from 'react';
import { Link } from 'react-router-dom';
import comingSoonImg from '../assets/ComingSoonBg.png';
import './ComingSonn.css';

export const ComingSoon: React.FC = () => {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-container">
        
        {/* Row 1: Title and Description */}
        <div className="coming-soon-row-header">
          <span className="coming-soon-badge">Exciting Things Ahead</span>
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-description">
            We are working hard behind the scenes to build something extraordinary for our community of female leaders. Stay tuned for the big reveal!
          </p>
        </div>

        {/* Row 2: Full Width Image */}
        <div className="coming-soon-row-image">
          <img src={comingSoonImg} alt="Coming Soon Preview" />
        </div>

        {/* Row 3: Navigation Buttons */}
        <div className="coming-soon-row-actions">
          <Link to="/" className="cs-btn cs-btn-primary">
            Back to Home
          </Link>
          <Link to="/contact" className="cs-btn cs-btn-secondary">
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};