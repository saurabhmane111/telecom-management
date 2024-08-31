// src/components/QAForm.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const QAFormContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
`;

const QAFormStyled = styled.form`
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

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  min-height: 100px;
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

function QAForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("QA Feedback submitted: ", data);
    reset();
  };

  return (
    <QAFormContainer>
      <h2>Quality Assurance Feedback</h2>
      <QAFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("taskId", { required: true })}
          placeholder="Task ID"
        />
        <Input
          type="text"
          {...register("assessorName", { required: true })}
          placeholder="Assessor Name"
        />
        <TextArea
          {...register("feedback", { required: true })}
          placeholder="Feedback"
        />
        <Button type="submit">Submit Feedback</Button>
      </QAFormStyled>
    </QAFormContainer>
  );
}

export default QAForm;
