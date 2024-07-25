import React from 'react';
import './FuelSummary.css';

function FuelSummary() {
  return (
    <div className="fuel-summary">
      <h2>Fuel Summary</h2>
      <div className="fuel-container">
        <div className="fuel-gauge">
          <div className="fuel-level">
            <span>47%</span>
          </div>
        </div>
        <div className="fuel-stats">
          <div className="fuel-item">
            <h3>Average mileage</h3>
            <p>25.4 mpg</p>
          </div>
          <div className="fuel-item">
            <h3>Total idling duration</h3>
            <p>30 min</p>
          </div>
          <div className="fuel-item">
            <h3>Average cost per mile</h3>
            <p>41.7 cents</p>
          </div>
          <div className="fuel-item">
            <h3>Average idling percent</h3>
            <p>5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuelSummary;
