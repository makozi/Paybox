import React from 'react';
import './customcard.css';
import rightArrow from './arrow.svg'; 

function CustomCard({ title, subtitle, details }) {
  return (
    <div className="custom-card">
      <div className="internal-card">
        <div className="">
          <p>{title}</p>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="card-footer">
      <p className="details">{details}</p>
        <img src={rightArrow} alt="Right Arrow" className="right-arrow" />
      </div>
    </div>
  );
}

export default CustomCard;