import React from 'react';
import './ComparativeCard.css';
import DoughnutChart from './DoughnutChart';
import yellow from './yellow.svg'; 
import gray from './gray.svg'; 
import blue from './blue.svg'; 

const ComparativeCard = () => (
  <div className="transaction-card">
    <div className="left-section">
      <h5 className='titles'>Transaction Comparative</h5>
      <div className="left-rows">
        <div className="left-texts">
        <div className="image-text-wrapper">
            <img src={blue} alt="Right Arrow" className="right-arrow" />
            <p className='send'>Send money</p>
          </div>
          <p className='digits'>₦105,000,000</p>
        </div>
      </div>
      <div className="left-rows">
      <div className="image-text-wrapper">
            <img src={yellow} alt="Right Arrow" className="right-arrow" />
            <p className='send'>Cashout</p>
          </div>
         
          <div className="image-text-wrapper">
            <img src={gray} alt="Right Arrow" className="right-arrow" />
            <p className='send'>Utilities and Bills</p>
          </div>
        
      </div>
      <div className="second-row">
         
        <p>₦12,000,000</p> 
        <p>₦4,200,000</p>
      </div>
    </div>
    <div className="right-section">
      <div className="">
        <DoughnutChart />
      </div>
    </div>
  </div>
);

export default ComparativeCard;
