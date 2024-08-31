import React from "react";
import styled from "styled-components";

// Styled components for TasksBoard
const BoardContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px;
  background-color: #f5f7fb;
  min-height: 100vh;
`;

const Column = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColumnHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;
`;

const TaskCard = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TaskTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #1f2937;
`;

const TaskDetails = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: ${(props) => props.color || "#e5e7eb"};
  color: ${(props) => (props.color === "#e5e7eb" ? "#374151" : "#fff")};
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 8px;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
`;
// TasksBoard component
const TasksBoard = () => {
  return (
    <BoardContainer>
      <Title>Tasks Board</Title>
      <Column>
        <ColumnHeader>To Do</ColumnHeader>
        <TaskCard>
          <TaskTitle>Plan Network Architecture</TaskTitle>
          <TaskDetails>Project: Office Network Setup</TaskDetails>
          <div>
            <Tag color="#f87171">high priority</Tag>
            <Tag color="#60a5fa">network</Tag>
          </div>
        </TaskCard>
        <TaskCard>
          <TaskTitle>Procure Network Equipment</TaskTitle>
          <TaskDetails>Project: Data Center Expansion</TaskDetails>
          <div>
            <Tag color="#f87171">procurement</Tag>
            <Tag color="#fbbf24">medium priority</Tag>
          </div>
        </TaskCard>
        <TaskCard>
          <TaskTitle>Set Up VPN for Remote Offices</TaskTitle>
          <TaskDetails>Project: Global Network Integration</TaskDetails>
          <div>
            <Tag color="#10b981">vpn</Tag>
            <Tag color="#f87171">high priority</Tag>
          </div>
        </TaskCard>
      </Column>

      <Column>
        <ColumnHeader>In Progress</ColumnHeader>
        <TaskCard>
          <TaskTitle>Install and Configure Firewalls</TaskTitle>
          <TaskDetails>Project: Office Network Setup</TaskDetails>
          <div>
            <Tag color="#34d399">firewall</Tag>
            <Tag color="#f87171">security</Tag>
          </div>
        </TaskCard>
        <TaskCard>
          <TaskTitle>Test Network Redundancy</TaskTitle>
          <TaskDetails>Project: Data Center Expansion</TaskDetails>
          <div>
            <Tag color="#60a5fa">testing</Tag>
            <Tag color="#34d399">redundancy</Tag>
          </div>
        </TaskCard>
      </Column>

      <Column>
        <ColumnHeader>Completed</ColumnHeader>
        <TaskCard>
          <TaskTitle>Deploy Network Monitoring Tools</TaskTitle>
          <TaskDetails>Project: Office Network Setup</TaskDetails>
          <div>
            <Tag color="#10b981">completed</Tag>
            <Tag color="#f87171">monitoring</Tag>
          </div>
        </TaskCard>
        <TaskCard>
          <TaskTitle>Train IT Team on New Systems</TaskTitle>
          <TaskDetails>Project: Global Network Integration</TaskDetails>
          <div>
            <Tag color="#10b981">training</Tag>
            <Tag color="#f87171">completed</Tag>
          </div>
        </TaskCard>
      </Column>

      {/* Add more columns here */}
    </BoardContainer>
  );
};

export default TasksBoard;
