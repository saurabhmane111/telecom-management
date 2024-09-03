import React, { useState } from 'react';
import styled from 'styled-components';

const InitializationContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectInitialization = () => {
  const [projectName, setProjectName] = useState('');
  const [objectives, setObjectives] = useState('');
  const [stakeholders, setStakeholders] = useState('');
  const [scope, setScope] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      projectName,
      objectives,
      stakeholders,
      scope,
      additionalDetails,
    });
  };

  return (
    <InitializationContainer>
      <h2>Project Initialization</h2>
      <form onSubmit={handleSubmit}>
        <FormSection>
          <FormLabel htmlFor="projectName">Project Name</FormLabel>
          <FormInput
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </FormSection>

        <FormSection>
          <FormLabel htmlFor="objectives">Project Objectives</FormLabel>
          <TextArea
            id="objectives"
            rows="4"
            value={objectives}
            onChange={(e) => setObjectives(e.target.value)}
            required
          />
        </FormSection>

        <FormSection>
          <FormLabel htmlFor="stakeholders">Stakeholders</FormLabel>
          <TextArea
            id="stakeholders"
            rows="4"
            value={stakeholders}
            onChange={(e) => setStakeholders(e.target.value)}
            required
          />
        </FormSection>

        <FormSection>
          <FormLabel htmlFor="scope">Project Scope</FormLabel>
          <TextArea
            id="scope"
            rows="4"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            required
          />
        </FormSection>

        <FormSection>
          <FormLabel htmlFor="additionalDetails">Additional Details</FormLabel>
          <TextArea
            id="additionalDetails"
            rows="4"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
          />
        </FormSection>

        <Button type="submit">Submit</Button>
      </form>
    </InitializationContainer>
  );
};

export default ProjectInitialization;
