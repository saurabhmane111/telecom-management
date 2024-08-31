// src/components/Appointments.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const AppointmentForm = styled.form`
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
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

function Appointments() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AppointmentForm onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("appointmentDate")} placeholder="Appointment Date" />
      <Input {...register("clientName")} placeholder="Client Name" />
      <Button type="submit">Schedule Appointment</Button>
    </AppointmentForm>
  );
}

export default Appointments;
