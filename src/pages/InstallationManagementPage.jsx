// src/pages/InstallationManagementPage.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import InstallationProgress from "../components/InstallationProgress";
import QAForm from "../components/QAForm";
import SiteSurveyForm from "../components/SiteSurveyForm";
import TeamAllocation from "../components/TeamAllocation"; // Import TeamAllocation

function InstallationManagementPage() {
  return (
    <div>
      <h1>Installation Management</h1>

      <Routes>
        <Route path="site-survey" element={<SiteSurveyForm />} />
        <Route path="team-allocation" element={<TeamAllocation />} />
        <Route path="progress" element={<InstallationProgress />} />
        <Route path="qa" element={<QAForm />} />
      </Routes>
    </div>
  );
}

export default InstallationManagementPage;
