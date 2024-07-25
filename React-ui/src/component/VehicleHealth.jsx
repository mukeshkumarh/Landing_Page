import React from 'react';
import './VehicleHealth.css';

function VehicleHealth() {
  return (
    <div className="vehicle-health">
      <h2>Vehicle Health</h2>
      <div className="health-details">
        <div className="health-item tire-pressure">
          <h3>Tire Pressure</h3>
          <div className="pressure-details">
            <div className="pressure">
              <span className="pressure-value">36 PSI</span>
              <span className="pressure-label">Front</span>
            </div>
            <div className="pressure">
              <span className="pressure-value">35 PSI</span>
              <span className="pressure-label">Rear</span>
            </div>
            <div className="pressure">
              <span className="pressure-value low">30 PSI</span>
              <span className="pressure-label">Left Front</span>
            </div>
            <div className="pressure">
              <span className="pressure-value">35 PSI</span>
              <span className="pressure-label">Right Rear</span>
            </div>
          </div>
        </div>
        <div className="health-item battery-voltage">
          <h3>Battery Voltage</h3>
          <p>12 Volts</p>
        </div>
        <div className="health-item dtc-alert">
          <h3>DTC Alert</h3>
          <p className="alert">Engine oil level is low</p>
          <p className="alert">Engine misfire detected</p>
        </div>
      </div>
    </div>
  );
}

export default VehicleHealth;
