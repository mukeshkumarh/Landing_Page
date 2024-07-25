import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">VIN Summary</div>
      <div className="sidebar-item">Tracking</div>
      <div className="sidebar-item">Safety</div>
      <div className="sidebar-item">Sustainability</div>
      <div className="sidebar-item">Maintenance</div>
      <div className="sidebar-item">Compliance</div>
    </div>
  );
}

export default Sidebar;
