// src/components/TaskManagement.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
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

function TaskManagement() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Task data: ", data);
    reset();
  };

  return (
    <TaskForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("taskName", { required: true })}
        placeholder="Task Name"
      />
      <TextArea
        {...register("description", { required: true })}
        placeholder="Description"
      />
      <Button type="submit">Add Task</Button>
    </TaskForm>
  );
}

export default TaskManagement;
