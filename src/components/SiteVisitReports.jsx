// src/components/SiteVisitReports.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SiteVisitForm = styled.form`
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

function SiteVisitReports() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Site Visit Report data: ", data);
    reset();
  };

  return (
    <SiteVisitForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("siteName", { required: true })}
        placeholder="Site Name"
      />
      <TextArea
        {...register("visitDetails", { required: true })}
        placeholder="Visit Details"
      />
      <Button type="submit">Submit Report</Button>
    </SiteVisitForm>
  );
}

export default SiteVisitReports;
