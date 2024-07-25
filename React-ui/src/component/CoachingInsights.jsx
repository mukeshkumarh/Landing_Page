import React from 'react';
import './CoachingInsights.css';

function CoachingInsights() {
  return (
    <div className="coaching-insights">
      <h2>Coaching Insights</h2>
      <div className="insights-details">
        <div className="insight-item">
          Fuel cost is up by 3%
          <button className="insight-button"></button>
        </div>
        <div className="insight-item">
          HB is more than benchmark
          <button className="insight-button"></button>
        </div>
        <div className="insight-item">
          HB is more than benchmark
          <button className="insight-button"></button>
        </div>
      </div>
    </div>
  );
}

export default CoachingInsights;
