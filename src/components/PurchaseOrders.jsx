// src/components/PurchaseOrders.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const PurchaseOrderForm = styled.form`
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

function PurchaseOrders() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Purchase Order data: ", data);
    reset();
  };

  return (
    <PurchaseOrderForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("orderID", { required: true })}
        placeholder="Order ID"
      />
      <Input
        {...register("vendorName", { required: true })}
        placeholder="Vendor Name"
      />
      <Button type="submit">Create Purchase Order</Button>
    </PurchaseOrderForm>
  );
}

export default PurchaseOrders;
