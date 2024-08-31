// src/components/TeamAllocation.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const TeamMemberList = styled.div`
  margin-top: 20px;
  background-color: #e2e2e2;
  padding: 10px;
  border-radius: 8px;
`;

const TeamMemberItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const TeamAllocation = () => {
  const { register, handleSubmit, reset } = useForm();

  // Initialize with default manager and technician
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "John Doe",
      role: "manager",
      contact: "john.doe@company.com",
      responsibilities: "Oversee all operations",
      assignedEquipment: "Laptop, Mobile Phone",
      location: "Head Office",
      availability: "available",
      manager: "true",
    },
    {
      name: "Jane Smith",
      role: "technician",
      contact: "jane.smith@company.com",
      responsibilities: "Handle equipment installation",
      assignedEquipment: "Tool Kit, Safety Gear",
      location: "Site B",
      availability: "available",
      manager: "false",
    },
  ]);

  const onSubmit = (data) => {
    setTeamMembers([...teamMembers, data]);
    reset(); // Reset form fields after submission
  };

  return (
    <FormContainer>
      <h1>Team Allocation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Team Member Name</Label>
          <Input type="text" {...register("name")} />

          <Label>Role</Label>
          <Select {...register("role")}>
            <option value="engineer">Engineer</option>
            <option value="technician">Technician</option>
            <option value="supervisor">Supervisor</option>
            <option value="manager">Manager</option>
          </Select>

          <Label>Contact Information</Label>
          <Input type="text" {...register("contact")} />

          <Label>Responsibilities</Label>
          <TextArea rows="3" {...register("responsibilities")} />

          <Label>Assigned Equipment</Label>
          <Input
            type="text"
            placeholder="e.g., Fiber Optic Tools, Safety Gear"
            {...register("assignedEquipment")}
          />

          <Label>Location</Label>
          <Input
            type="text"
            placeholder="e.g., Site A, Sector 45"
            {...register("location")}
          />

          <Label>Availability</Label>
          <Select {...register("availability")}>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="on-leave">On Leave</option>
          </Select>

          <Label>Is Manager?</Label>
          <Select {...register("manager")}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </Select>
        </FormGroup>

        <Button type="submit">Add Team Member</Button>
      </form>

      <TeamMemberList>
        <h2>Team Member List</h2>
        {teamMembers.map((member, index) => (
          <TeamMemberItem key={index}>
            <p>
              <strong>Name:</strong> {member.name}
            </p>
            <p>
              <strong>Role:</strong> {member.role}
            </p>
            <p>
              <strong>Contact:</strong> {member.contact}
            </p>
            <p>
              <strong>Responsibilities:</strong> {member.responsibilities}
            </p>
            <p>
              <strong>Assigned Equipment:</strong> {member.assignedEquipment}
            </p>
            <p>
              <strong>Location:</strong> {member.location}
            </p>
            <p>
              <strong>Availability:</strong> {member.availability}
            </p>
            <p>
              <strong>Is Manager?</strong>{" "}
              {member.manager === "true" ? "Yes" : "No"}
            </p>
          </TeamMemberItem>
        ))}
      </TeamMemberList>
    </FormContainer>
  );
};

export default TeamAllocation;
