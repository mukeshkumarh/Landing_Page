import React from 'react';
import './DriverSafety.css';

function DriverSafety() {
  return (
    <div className="driver-safety">
      <div className="header">
        <h2>DRIVER SAFETY</h2>
        <button className="current-month">Current month</button>
      </div>
      <div className="content">
        <div className="safety-score-container">
          <div className="circle">
            <div className="score">88</div>
          </div>
          <p>Safety Score</p>
        </div>
        <div className="details">
          <div className="row">
            <div className="detail-item">
              <p>Average speed</p>
              <h3>61 mph</h3>
            </div>
            <div className="detail-item">
              <p>Top speed</p>
              <h3>110 mph</h3>
            </div>
            <div className="detail-item">
              <p>Harsh acceleration</p>
              <h3>6</h3>
            </div>
          </div>
          <div className="row">
            <div className="detail-item">
              <p>Harsh braking</p>
              <h3>5</h3>
            </div>
            <div className="detail-item">
              <p>Harsh cornering</p>
              <h3>4</h3>
            </div>
            <div className="detail-item">
              <p>Overspeeding distance</p>
              <h3>52 mph</h3>
            </div>
            <div className="detail-item">
              <p>Distance travelled at night</p>
              <h3>102 mile</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverSafety;
