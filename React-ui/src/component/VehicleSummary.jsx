import React from 'react';
import './VehicleSummary.css';

function VehicleSummary() {
  return (
    <div className="vehicle-summary">
      <div className="vehicle-details">
        <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Vehicle" className="vehicle-image"/>
        <div className="vehicle-info">
          <div className="vehicle-info-item">
            <span className="label">Make</span>
            <span className="value">Chevrolet</span>
          </div>
          <div className="vehicle-info-item">
            <span className="label">Model</span>
            <span className="value">Tahoe</span>
          </div>
          <div className="vehicle-info-item">
            <span className="label">Trim</span>
            <span className="value">LT</span>
          </div>
          <div className="vehicle-info-item">
            <span className="label">Year</span>
            <span className="value">2023</span>
          </div>
          <div className="vehicle-info-item">
            <span className="label">Class</span>
            <span className="value">SUV</span>
          </div>
          <div className="vehicle-info-item">
            <span className="label">Fuel Type</span>
            <span className="value">Gasoline</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSummary;
