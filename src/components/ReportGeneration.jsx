// src/components/ReportGeneration.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const ReportForm = styled.form`
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

function ReportGeneration() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Report data: ", data);
    reset();
  };

  return (
    <ReportForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("reportType", { required: true })}
        placeholder="Report Type"
      />
      <Input
        type="date"
        {...register("dateRange", { required: true })}
        placeholder="Date Range"
      />
      <Button type="submit">Generate Report</Button>
    </ReportForm>
  );
}

export default ReportGeneration;
