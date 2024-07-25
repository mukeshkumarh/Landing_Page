import React from 'react';
import Sidebar from './component/Sidebar'

import './App.css';
import Navbar from './component/Navbar';
import VehiceSummary from './component/VehicleSummary'
import VehicleHealth from './component/VehicleHealth';
import VehicleStatistics from './component/VehicleStatistics';
import DriverSafety from './component/DriverSafety';
import FuelSummary from './component/FuelSummary';
import CoachingInsights from './component/CoachingInsights';
function App() {
  return (
    <div className="app">
  <Sidebar/>
      <div className="main-content">
       <Navbar/>
       <VehiceSummary/>
       <VehicleHealth/>
       <VehicleStatistics/>
       <DriverSafety/>
       <FuelSummary/>
       <CoachingInsights/>
      </div>
    </div>
  );
}

export default App;
