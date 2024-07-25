
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-item">VIN Eligibility</div>
        <div className="navbar-item">Dashboard</div>
      </div>
      <div className="navbar-right">
        <div className="navbar-item">Overview</div>
        <div className="navbar-item">Onboarding</div>
        <div className="navbar-item">Signal Map</div>
        <div className="navbar-item">Developer Corner</div>
      </div>
    </div>
  );
}

export default Navbar;
