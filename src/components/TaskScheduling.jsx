import React from "react";

const TaskContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
`;

const TaskTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TaskDetails = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const GanttChart = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ececec;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const tasks = [
  {
    title: "Task 1",
    details: "Setup project framework",
    startDate: "2024-09-01",
    endDate: "2024-09-05",
  },
  {
    title: "Task 2",
    details: "Develop UI components",
    startDate: "2024-09-06",
    endDate: "2024-09-10",
  },
];

export const TaskScheduling = () => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskContainer key={index}>
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDetails>{task.details}</TaskDetails>
          <GanttChart>
            Gantt Chart: {task.startDate} - {task.endDate}
          </GanttChart>
        </TaskContainer>
      ))}
    </div>
  );
};
import styled from "styled-components";
