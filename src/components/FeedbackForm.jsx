// src/components/FeedbackForm.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FeedbackContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  margin: 20px;
`;

const FeedbackFormStyled = styled.form`
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

function FeedbackForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Feedback submitted: ", data);
    reset();
  };

  return (
    <FeedbackContainer>
      <h2>Submit Feedback</h2>
      <FeedbackFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", { required: true })}
          placeholder="Your Name"
        />
        <Input
          type="email"
          {...register("email", { required: true })}
          placeholder="Your Email"
        />
        <TextArea
          {...register("feedback", { required: true })}
          placeholder="Your Feedback"
        />
        <Button type="submit">Submit Feedback</Button>
      </FeedbackFormStyled>
    </FeedbackContainer>
  );
}

export default FeedbackForm;
