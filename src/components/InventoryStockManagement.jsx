// src/components/InventoryStockManagement.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StockManagementForm = styled.form`
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

function InventoryStockManagement() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Inventory Stock data: ", data);
    reset();
  };

  return (
    <StockManagementForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("item", { required: true })}
        placeholder="Item Name"
      />
      <Input
        type="number"
        {...register("stock", { required: true })}
        placeholder="Stock Quantity"
      />
      <Button type="submit">Update Stock</Button>
    </StockManagementForm>
  );
}

export default InventoryStockManagement;
