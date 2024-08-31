// src/components/SiteSurveyForm.js
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SurveyFormContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
`;

const SurveyFormStyled = styled.form`
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

function SiteSurveyForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Site Survey data submitted: ", data);
    reset();
  };

  return (
    <SurveyFormContainer>
      <h2>Site Survey Form</h2>
      <SurveyFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("siteName", { required: true })}
          placeholder="Site Name"
        />
        <Input
          {...register("siteLocation", { required: true })}
          placeholder="Site Location"
        />
        <Input
          {...register("surveyorName", { required: true })}
          placeholder="Surveyor Name"
        />
        <Input type="date" {...register("surveyDate", { required: true })} />
        <TextArea {...register("observations")} placeholder="Observations" />
        <Button type="submit">Submit Survey</Button>
      </SurveyFormStyled>
    </SurveyFormContainer>
  );
}

export default SiteSurveyForm;
