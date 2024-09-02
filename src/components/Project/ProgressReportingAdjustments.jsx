import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const ReportingContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const ReportContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const ReportHeader = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const ReportBody = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
`;

const PlanUpdateContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const PlanUpdateHeader = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const PlanUpdateContent = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
`;

const RiskAssessmentContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const RiskAssessmentHeader = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const RiskAssessmentItem = styled.div`
  margin: 10px 0;
`;

const RiskAssessmentTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

const RiskAssessmentDetails = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #555;
`;

const ProgressReportingAdjustments = () => {
  // Dummy data for progress reporting, project plan updates, and risk assessments
  const [reports] = useState([
    {
      id: 1,
      title: "Weekly Progress Report",
      content: "All tasks are on track. No major issues reported. Minor delays in server configuration expected to be resolved by next week.",
      date: "2024-09-05",
    },
    {
      id: 2,
      title: "Monthly Project Status",
      content: "Project is 60% complete. Significant progress on network setup. Some delays in equipment delivery affecting the schedule.",
      date: "2024-09-30",
    },
  ]);

  const [planUpdates] = useState([
    {
      id: 1,
      update: "Updated server installation schedule due to equipment delay. New completion date set for 2024-09-15.",
      date: "2024-09-04",
    },
    {
      id: 2,
      update: "Revised network testing phase to start earlier to accommodate additional configurations. New start date: 2024-09-18.",
      date: "2024-09-20",
    },
  ]);

  const [riskAssessments] = useState([
    {
      id: 1,
      title: "Equipment Delivery Delay",
      risk: "Delayed delivery of critical network equipment.",
      impact: "High impact on project timeline.",
      mitigation: "Expedited shipping and revised installation schedule.",
    },
    {
      id: 2,
      title: "Staff Shortage",
      risk: "Potential shortage of installation staff.",
      impact: "Moderate impact on task completion.",
      mitigation: "Hiring additional temporary staff.",
    },
  ]);

  return (
    <ReportingContainer>
      <h2>Progress Reporting & Adjustments</h2>

      {/* Reports Section */}
      <Section>
        <SectionTitle>Progress Reports</SectionTitle>
        {reports.map((report) => (
          <ReportContainer key={report.id}>
            <ReportHeader>{report.title}</ReportHeader>
            <ReportBody>{report.content}</ReportBody>
            <ReportBody><strong>Date:</strong> {report.date}</ReportBody>
          </ReportContainer>
        ))}
      </Section>

      {/* Plan Updates Section */}
      <Section>
        <SectionTitle>Project Plan Updates</SectionTitle>
        {planUpdates.map((update) => (
          <PlanUpdateContainer key={update.id}>
            <PlanUpdateHeader>Update</PlanUpdateHeader>
            <PlanUpdateContent>{update.update}</PlanUpdateContent>
            <PlanUpdateContent><strong>Date:</strong> {update.date}</PlanUpdateContent>
          </PlanUpdateContainer>
        ))}
      </Section>

      {/* Risk Assessments Section */}
      <Section>
        <SectionTitle>Risk Assessments</SectionTitle>
        {riskAssessments.map((risk) => (
          <RiskAssessmentContainer key={risk.id}>
            <RiskAssessmentHeader>{risk.title}</RiskAssessmentHeader>
            <RiskAssessmentItem>
              <RiskAssessmentTitle>Risk:</RiskAssessmentTitle>
              <RiskAssessmentDetails>{risk.risk}</RiskAssessmentDetails>
            </RiskAssessmentItem>
            <RiskAssessmentItem>
              <RiskAssessmentTitle>Impact:</RiskAssessmentTitle>
              <RiskAssessmentDetails>{risk.impact}</RiskAssessmentDetails>
            </RiskAssessmentItem>
            <RiskAssessmentItem>
              <RiskAssessmentTitle>Mitigation:</RiskAssessmentTitle>
              <RiskAssessmentDetails>{risk.mitigation}</RiskAssessmentDetails>
            </RiskAssessmentItem>
          </RiskAssessmentContainer>
        ))}
      </Section>
    </ReportingContainer>
  );
};

export default ProgressReportingAdjustments;
