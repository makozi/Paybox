import React from 'react';
import './walletcard.css'; // Import your CSS file for styling

function WithdrawalCard() {
  return (
    <div className="card" style={{backgroundColor: "#032282"}}>
      <div className="card-header">
        <div className="header-left">
          <h5 style={{color:'#CDCDCD'}}>Wallet Balance</h5>
          <h2>₦50,000.00 <span className="eye-icon" style={{marginLeft:20}}>&#128065;</span></h2>
        </div>
        
      </div>
      <div className="card-footers">
        <button className="action-button add-funds">Add Funds</button>
        <button className="action-button withdraw">Withdraw</button>
      </div>
    </div>
  );
}

export default WithdrawalCard;
