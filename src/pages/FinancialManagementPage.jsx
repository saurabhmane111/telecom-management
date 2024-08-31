import React from "react";
import { Route, Routes } from "react-router-dom";
import CostDashboard from "../components/CostDashboard";
import InvoiceTable from "../components/InvoiceTable";
import PaymentForm from "../components/PaymentForm";

function FinancialManagementPage() {
  return (
    <div>
      <h1>Financial Management</h1>

      <Routes>
        <Route path="invoices" element={<InvoiceTable />} />
        <Route path="cost-dashboard" element={<CostDashboard />} />
        <Route path="payment-form" element={<PaymentForm />} />
      </Routes>
    </div>
  );
}

export default FinancialManagementPage;
