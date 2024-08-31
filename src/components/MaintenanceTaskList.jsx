// src/components/MaintenanceTaskList.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const TaskListContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  margin: 20px;
`;

const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const TaskInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TaskButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskItem = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function MaintenanceTaskList() {
  const { register, handleSubmit, reset } = useForm();
  const [tasks, setTasks] = useState([]);

  const onSubmit = (data) => {
    setTasks([...tasks, data]);
    reset();
  };

  return (
    <TaskListContainer>
      <h2>Maintenance Tasks</h2>
      <TaskForm onSubmit={handleSubmit(onSubmit)}>
        <TaskInput
          {...register("taskDescription", { required: true })}
          placeholder="Task Description"
        />
        <TaskInput
          type="date"
          {...register("dueDate", { required: true })}
          placeholder="Due Date"
        />
        <TaskButton type="submit">Add Task</TaskButton>
      </TaskForm>
      {tasks.map((task, index) => (
        <TaskItem key={index}>
          <span>
            {task.taskDescription} - Due: {task.dueDate}
          </span>
        </TaskItem>
      ))}
    </TaskListContainer>
  );
}

export default MaintenanceTaskList;
