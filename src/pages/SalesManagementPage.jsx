import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Appointments from "../components/Appointments";
import LeadManagement from "../components/LeadManagement";
import Quotations from "../components/Quotations";

function SalesManagementPage() {
  // Use the current location to determine which component to show
  const location = useLocation();

  return (
    <div>
      <h1>Sales Management</h1>
      <Routes>
        <Route path="leads" element={<LeadManagement />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="quotations" element={<Quotations />} />
      </Routes>
    </div>
  );
}

export default SalesManagementPage;
