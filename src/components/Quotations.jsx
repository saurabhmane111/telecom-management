// src/components/Quotations.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const QuotationForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
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

function Quotations() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <QuotationForm onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("clientName")} placeholder="Client Name" />
      <TextArea
        {...register("quotationDetails")}
        placeholder="Quotation Details"
      />
      <Button type="submit">Create Quotation</Button>
    </QuotationForm>
  );
}

export default Quotations;
