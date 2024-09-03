import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const ExecutionMonitoringContainer = styled.div`
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

const Status = styled.span`
  padding: 5px 10px;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props) => {
    switch (props.status) {
      case "On Track":
        return "#28a745";
      case "Delayed":
        return "#dc3545";
      case "At Risk":
        return "#ffc107";
      default:
        return "#6c757d";
    }
  }};
`;

const ProjectContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const ProjectTitle = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDetail = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #555;
`;

const DetailList = styled.ul`
  margin: 10px 0;
  padding: 0;
  list-style-type: none;
`;

const DetailItem = styled.li`
  margin-bottom: 5px;
`;

const ExecutionMonitoring = () => {
  // Dummy data for multiple projects and their tasks
  const [projects] = useState([
    {
      id: 1,
      name: "Project Alpha",
      description: "Network installation for Alpha campus.",
      startDate: "2024-08-01",
      endDate: "2024-12-01",
      manager: "John Doe",
      tasks: [
        {
          id: 1,
          task: "Network Setup",
          plannedCompletion: "2024-09-05",
          actualCompletion: "2024-09-06",
          status: "Delayed",
          reasonForDelay: "Supply chain issues",
          onFieldManager: "Alice Smith",
        },
        {
          id: 2,
          task: "Server Configuration",
          plannedCompletion: "2024-09-10",
          actualCompletion: "2024-09-10",
          status: "On Track",
          reasonForDelay: null,
          onFieldManager: "Bob Johnson",
        },
      ],
    },
    {
      id: 2,
      name: "Project Beta",
      description: "Firewall installation and configuration for Beta office.",
      startDate: "2024-08-15",
      endDate: "2024-11-15",
      manager: "Jane Roe",
      tasks: [
        {
          id: 3,
          task: "Firewall Installation",
          plannedCompletion: "2024-09-15",
          actualCompletion: "2024-09-16",
          status: "Delayed",
          reasonForDelay: "Technical difficulties",
          onFieldManager: "Tom Wilson",
        },
        {
          id: 4,
          task: "Network Testing",
          plannedCompletion: "2024-09-20",
          actualCompletion: "2024-09-19",
          status: "On Track",
          reasonForDelay: null,
          onFieldManager: "Sarah Lee",
        },
      ],
    },
  ]);

  return (
    <ExecutionMonitoringContainer>
      <h2>Execution & Monitoring</h2>

      {projects.map((project) => {
        return (
          <ProjectContainer key={project.id}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDetail>
              <strong>Description:</strong> {project.description}
            </ProjectDetail>
            <ProjectDetail>
              <strong>Start Date:</strong> {project.startDate}
            </ProjectDetail>
            <ProjectDetail>
              <strong>End Date:</strong> {project.endDate}
            </ProjectDetail>
            <ProjectDetail>
              <strong>Project Manager:</strong> {project.manager}
            </ProjectDetail>

            {/* Progress Table */}
            <Section>
              <SectionTitle>Task Progress</SectionTitle>
              <Table>
                <thead>
                  <tr>
                    <TableHeader>Task</TableHeader>
                    <TableHeader>Planned Completion</TableHeader>
                    <TableHeader>Actual Completion</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader>Reason for Delay</TableHeader>
                    <TableHeader>On-Field Manager</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {project.tasks.map((task) => (
                    <tr key={task.id}>
                      <TableData>{task.task}</TableData>
                      <TableData>{task.plannedCompletion}</TableData>
                      <TableData>{task.actualCompletion}</TableData>
                      <TableData>
                        <Status status={task.status}>{task.status}</Status>
                      </TableData>
                      <TableData>{task.reasonForDelay || "N/A"}</TableData>
                      <TableData>{task.onFieldManager}</TableData>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Section>
          </ProjectContainer>
        );
      })}
    </ExecutionMonitoringContainer>
  );
};

export default ExecutionMonitoring;
