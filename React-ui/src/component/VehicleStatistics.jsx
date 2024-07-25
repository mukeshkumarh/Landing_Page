import React from 'react';
import './VehicleStatistics.css';

function VehicleStatistics() {
  return (
    <div className="vehicle-statistics">
      <h2>VEHICLE STATISTICS</h2>
      <div className="statistics-details">
        <div className="stat-item">
          <div className="stat-icon">📍</div>
          <div className="stat-info">
            <div className="stat-value">2752</div>
            <div className="stat-label">miles</div>
            <div className="stat-description">Total distance covered</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">⏱️</div>
          <div className="stat-info">
            <div className="stat-value">36 hrs 22 min</div>
            <div className="stat-description">Total time traveled</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">📏</div>
          <div className="stat-info">
            <div className="stat-value">252</div>
            <div className="stat-label">miles</div>
            <div className="stat-description">Maximum distance covered</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">⏳</div>
          <div className="stat-info">
            <div className="stat-value">7</div>
            <div className="stat-label">hrs</div>
            <div className="stat-description">Maximum duration</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🛣️</div>
          <div className="stat-info">
            <div className="stat-value">188</div>
            <div className="stat-label">miles</div>
            <div className="stat-description">Average trip distance</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🕒</div>
          <div className="stat-info">
            <div className="stat-value">4</div>
            <div className="stat-label">hrs</div>
            <div className="stat-description">Average trip duration</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleStatistics;
