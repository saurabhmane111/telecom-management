import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Main Pages
import FinancialManagementPage from "./pages/FinancialManagementPage";
import HomePage from "./pages/HomePage";
import InstallationManagementPage from "./pages/InstallationManagementPage";
import OrderManagementPage from "./pages/OrderManagementPage";
import PostInstallationSupportPage from "./pages/PostInstallationSupportPage";
import SalesManagementPage from "./pages/SalesManagementPage";

// Sales Management Subroutes
import Appointments from "./components/Appointments";
import LeadManagement from "./components/LeadManagement";
import LeadOpportunityManagement from "./components/LeadOpportunityManagement";
import Quotations from "./components/Quotations";

// Order Management Subroutes
import OrderTracking from "./components/OrderTracking";
import PurchaseOrders from "./components/PurchaseOrders";
import VendorManagement from "./components/VendorManagement";

// Installation Management Subroutes
import InstallationProgress from "./components/InstallationProgress";
import QAForm from "./components/QAForm";
import SiteSurveyForm from "./components/SiteSurveyForm";
import TeamAllocation from "./components/TeamAllocation";

// Post Installation Support Subroutes
import FeedbackForm from "./components/FeedbackForm";
import MaintenanceTaskList from "./components/MaintenanceTaskList";
import MonitoringDashboard from "./components/MonitoringDashboard";

// Financial Management Subroutes
import CostDashboard from "./components/CostDashboard";
import InvoiceTable from "./components/InvoiceTable";
import PaymentForm from "./components/PaymentForm";
import TasksBoard from "./components/TasksBoard";
import { TaskScheduling } from "./components/TaskScheduling";
import ProjectManagementPage from "./pages/ProjectManagementPage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sales" element={<SalesManagementPage />}>
              <Route path="leadboard" element={<TasksBoard />} />
              <Route path="leads" element={<LeadManagement />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="quotations" element={<Quotations />} />
              <Route
                path="lead-opportunity-management"
                element={<LeadOpportunityManagement />}
              />{" "}
              {/* Add the new route */}
            </Route>
            <Route path="/orders/*" element={<OrderManagementPage />}>
              <Route path="tracking" element={<OrderTracking />} />
              <Route path="vendors" element={<VendorManagement />} />
              <Route path="purchase-orders" element={<PurchaseOrders />} />
            </Route>
            <Route path="/project/*" element={<ProjectManagementPage />} />

            <Route
              path="/installations"
              element={<InstallationManagementPage />}
            >
              <Route path="site-survey" element={<SiteSurveyForm />} />
              <Route path="team-allocation" element={<TeamAllocation />} />
              <Route path="progress" element={<InstallationProgress />} />
              <Route path="qa" element={<QAForm />} />
            </Route>
            <Route path="/support" element={<PostInstallationSupportPage />}>
              <Route
                path="monitoring-dashboard"
                element={<MonitoringDashboard />}
              />
              <Route
                path="maintenance-tasks"
                element={<MaintenanceTaskList />}
              />
              <Route path="feedback" element={<FeedbackForm />} />
            </Route>
            <Route path="/financials/*" element={<FinancialManagementPage />}>
              <Route path="invoices" element={<InvoiceTable />} />
              <Route path="cost-dashboard" element={<CostDashboard />} />
              <Route path="payment-form" element={<PaymentForm />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
