import React, { useState } from 'react';
import styled from 'styled-components';

const SchedulingContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
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

const Select = styled.select`
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

const TaskBreakdownScheduling = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dependencies, setDependencies] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      taskName,
      description,
      startDate,
      endDate,
      dependencies,
      priority,
    });
  };

  return (
    <SchedulingContainer>
      <h2>Task Breakdown & Scheduling</h2>
      <form onSubmit={handleSubmit}>
        {/* Task Name */}
        <Section>
          <SectionTitle>Task Breakdown</SectionTitle>
          <FormLabel htmlFor="taskName">Task Name</FormLabel>
          <FormInput
            id="taskName"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          
          <FormLabel htmlFor="description">Description</FormLabel>
          <TextArea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Section>

        {/* Scheduling */}
        <Section>
          <SectionTitle>Scheduling</SectionTitle>
          <FormLabel htmlFor="startDate">Start Date</FormLabel>
          <FormInput
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />

          <FormLabel htmlFor="endDate">End Date</FormLabel>
          <FormInput
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </Section>

        {/* Dependencies */}
        <Section>
          <SectionTitle>Dependencies</SectionTitle>
          <FormLabel htmlFor="dependencies">Task Dependencies</FormLabel>
          <TextArea
            id="dependencies"
            rows="4"
            value={dependencies}
            onChange={(e) => setDependencies(e.target.value)}
          />
        </Section>

        {/* Priority Levels */}
        <Section>
          <SectionTitle>Priority Levels</SectionTitle>
          <FormLabel htmlFor="priority">Priority</FormLabel>
          <Select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </Select>
        </Section>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </SchedulingContainer>
  );
};

export default TaskBreakdownScheduling;
