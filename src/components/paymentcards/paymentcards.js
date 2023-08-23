import React from 'react';
import './paymentcard.css'; // Import your CSS file
import down from './dropdown.svg'; 

const PaymentCard = ({ title, subtitle1,subtitle1a,subtitle2,subtitle2a, content1,content1a,content2,content2a, buttonText }) => {
  return (
    <div className="card">
      <div className="internal-card">
      <div className="card-header">
        <div className="left-section">
          <h4 className='title' style={{ color: '#032282' }}>{title}</h4>
        </div>
        <div className="right-sections">
          <button className="card-button">
            {buttonText}
            <img src={down} alt="Right Arrow" className="right-arrow" />
          </button>
        </div>
      </div>
      <div className="card-content">
        <div className="left-section">
          <p style={{ color: '#032282' ,}}>{subtitle1}</p>
          <p style={{ color: '#032282', fontWeight:'600' }}>{subtitle1a}</p>
        </div>
        <div className="right-sections">
          <p style={{ color: '#032282' ,}}>{content1}</p>
          <p style={{ color: '#032282' , fontWeight:'600'}}>{content1a}</p>
        </div>
      </div>

      <div className="card-content">
        <div className="left-section">
          <p style={{ color: '#032282' }}>{subtitle2}</p>
          <p style={{ color: '#032282', fontWeight:'600' }}>{subtitle2a}</p>
        </div>
        <div className="right-sections">
          <p style={{ color: '#032282' }}>{content2}</p>
          <p style={{ color: '#032282', fontWeight:'600' }}>{content2a}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PaymentCard;