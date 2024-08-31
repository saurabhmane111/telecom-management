// src/components/PaymentForm.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const PaymentContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
`;

const PaymentFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
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

function PaymentForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Payment data submitted: ", data);
    reset();
  };

  return (
    <PaymentContainer>
      <h2>Payment Form</h2>
      <PaymentFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register("invoiceId", { required: true })}
          placeholder="Invoice ID"
        />
        <Input
          type="text"
          {...register("paymentAmount", { required: true })}
          placeholder="Amount"
        />
        <Input
          type="text"
          {...register("paymentMethod", { required: true })}
          placeholder="Payment Method"
        />
        <Button type="submit">Process Payment</Button>
      </PaymentFormStyled>
    </PaymentContainer>
  );
}

export default PaymentForm;
