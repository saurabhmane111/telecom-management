import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";
import MaintenanceTaskList from "../components/MaintenanceTaskList";
import MonitoringDashboard from "../components/MonitoringDashboard";

function PostInstallationSupportPage() {
  return (
    <div>
      <h1>Post-Installation Support</h1>

      <Routes>
        <Route path="monitoring-dashboard" element={<MonitoringDashboard />} />
        <Route path="maintenance-tasks" element={<MaintenanceTaskList />} />
        <Route path="feedback" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

export default PostInstallationSupportPage;
