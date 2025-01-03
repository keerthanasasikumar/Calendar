import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavBar from './Admin/TopNavBar';
import CompanyManagement from "./Admin/CompanyManagement";
import CommunicationMethodManagement from "./Admin/CommunicationMethodManagement";
import Dashboard from "./User/Dashboard";
import CommunicationActionModel from "./User/CommunicationActionModel";
import Notification from "./User/Notification";
import CalendarView from "./User/CalendarView";
import CommunicationFrequencyReport from './Reportandanalysis/CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from './Reportandanalysis/EngagementEffectivenessDashboard';
import OverdueCommunicationTrends from './Reportandanalysis/OverdueCommunicationTrends';
import ActivityLog from './Reportandanalysis/ActivityLog';


const Calendar = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
    const [activeProfile, setActiveProfile] = useState("");
  
    const handleProfileClick = (profileType) => {
      setActiveProfile(profileType); // Toggle profile view
    };
  return (
    <Router>
    <div className="bg-gray-50 min-h-screen">
        <TopNavBar onProfileClick={handleProfileClick} />

        <Routes>
          <Route
            path="/admin/company-management"
            element={<CompanyManagement />}
          />
          <Route
            path="/admin/communication-method-management"
            element={<CommunicationMethodManagement />}
          />
          {/* Add User Dashboard Route */}
          <Route path="/user/dash-board" element={<Dashboard />} />
        </Routes>

        {/* Conditional rendering based on profile click */}
        {activeProfile === "admin" && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <CompanyManagement />
            <CommunicationMethodManagement />
          </div>
        )}

        {activeProfile === "user" && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Dashboard />
            <CommunicationActionModel />
            <Notification />
            <CalendarView />
          </div>
          )}
          {activeProfile === "report" && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <CommunicationFrequencyReport />
              <EngagementEffectivenessDashboard />
              <OverdueCommunicationTrends />
              <ActivityLog/>
              </div>
          )}
        </div>
      </Router>
  )
}

export default Calendar;
