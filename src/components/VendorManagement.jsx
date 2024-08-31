// src/components/VendorManagement.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const VendorForm = styled.form`
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

function VendorManagement() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Vendor data: ", data);
    reset();
  };

  return (
    <VendorForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("vendorName", { required: true })}
        placeholder="Vendor Name"
      />
      <Input
        {...register("contactDetails", { required: true })}
        placeholder="Contact Details"
      />
      <Button type="submit">Add Vendor</Button>
    </VendorForm>
  );
}

export default VendorManagement;
