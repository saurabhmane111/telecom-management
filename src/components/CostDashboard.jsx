// src/components/CostDashboard.js
import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
`;

const CostSummary = styled.div`
  margin-bottom: 20px;
`;

const CostItem = styled.div`
  margin-bottom: 10px;
`;

function CostDashboard() {
  // Example data
  const costs = {
    totalCost: "₹100,000",
    pendingPayments: "₹20,000",
    completedProjects: "₹80,000",
  };

  return (
    <DashboardContainer>
      <h2>Cost Dashboard</h2>
      <CostSummary>
        <CostItem>
          <strong>Total Cost:</strong> {costs.totalCost}
        </CostItem>
        <CostItem>
          <strong>Pending Payments:</strong> {costs.pendingPayments}
        </CostItem>
        <CostItem>
          <strong>Completed Projects:</strong> {costs.completedProjects}
        </CostItem>
      </CostSummary>
    </DashboardContainer>
  );
}

export default CostDashboard;
