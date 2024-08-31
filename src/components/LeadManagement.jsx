// src/components/LeadManagement.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const LeadForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function LeadManagement() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LeadForm onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("leadName")} placeholder="Lead Name" />
      <Input {...register("contactInfo")} placeholder="Contact Information" />
      <Button type="submit">Add Lead</Button>
    </LeadForm>
  );
}

export default LeadManagement;
