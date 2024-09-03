import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const CompletionContainer = styled.div`
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

const DetailContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const DetailHeader = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const DetailBody = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
`;

const ProjectCompletionHandover = () => {
  // Dummy data for project completion and handover
  const [completionDetails] = useState({
    finalTasks: [
      { id: 1, task: "Final Inspection", status: "Completed", date: "2024-09-30" },
      { id: 2, task: "Documentation Submission", status: "Completed", date: "2024-09-28" },
    ],
    resourceRelease: [
      { id: 1, resource: "Network Equipment", status: "Released", date: "2024-09-30" },
      { id: 2, resource: "Installation Team", status: "Released", date: "2024-09-30" },
    ],
    handover: {
      handoverDate: "2024-10-01",
      recipient: "Client ABC",
      notes: "All project deliverables have been met. Final documentation provided.",
    },
  });

  return (
    <CompletionContainer>
      <h2>Project Completion & Handover</h2>

      {/* Final Tasks Section */}
      <Section>
        <SectionTitle>Final Task Completion</SectionTitle>
        <Table>
          <thead>
            <tr>
              <TableHeader>Task</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Date</TableHeader>
            </tr>
          </thead>
          <tbody>
            {completionDetails.finalTasks.map((task) => (
              <tr key={task.id}>
                <TableData>{task.task}</TableData>
                <TableData>{task.status}</TableData>
                <TableData>{task.date}</TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      {/* Resource Release Section */}
      <Section>
        <SectionTitle>Resource Release</SectionTitle>
        <Table>
          <thead>
            <tr>
              <TableHeader>Resource</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Date</TableHeader>
            </tr>
          </thead>
          <tbody>
            {completionDetails.resourceRelease.map((resource) => (
              <tr key={resource.id}>
                <TableData>{resource.resource}</TableData>
                <TableData>{resource.status}</TableData>
                <TableData>{resource.date}</TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      {/* Project Handover Section */}
      <Section>
        <SectionTitle>Project Handover</SectionTitle>
        <DetailContainer>
          <DetailHeader>Handover Details</DetailHeader>
          <DetailBody><strong>Date:</strong> {completionDetails.handoverDate}</DetailBody>
          <DetailBody><strong>Recipient:</strong> {completionDetails.handover.recipient}</DetailBody>
          <DetailBody><strong>Notes:</strong> {completionDetails.handover.notes}</DetailBody>
        </DetailContainer>
      </Section>
    </CompletionContainer>
  );
};

export default ProjectCompletionHandover;
