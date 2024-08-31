import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SelectStyled = styled(Select)`
  margin-bottom: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.remove ? "#dc3545" : "#007bff")};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: ${(props) => (props.remove ? "#c82333" : "#0056b3")};
  }
`;

const RoleSelect = styled(Select)`
  width: 100%;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

const TeamAllocation = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      teamMembers: [{ name: "", role: "", contact: "", manager: false }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "teamMembers",
  });

  const roleOptions = [
    { value: "engineer", label: "Engineer" },
    { value: "technician", label: "Technician" },
    { value: "supervisor", label: "Supervisor" },
    { value: "manager", label: "Manager" },
  ];

  const onSubmit = (data) => {
    console.log("Team Allocation Data:", data);
  };

  return (
    <FormContainer>
      <h1>Advanced Team Allocation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <FormGroup key={item.id}>
            <Label>Team Member Name</Label>
            <Input
              type="text"
              placeholder="Enter name"
              {...register(`teamMembers.${index}.name`, {
                required: "Name is required",
              })}
            />
            {errors.teamMembers && errors.teamMembers[index]?.name && (
              <ErrorText>{errors.teamMembers[index].name.message}</ErrorText>
            )}

            <Label>Role</Label>
            <Controller
              name={`teamMembers.${index}.role`}
              control={control}
              render={({ field }) => (
                <RoleSelect
                  {...field}
                  options={roleOptions}
                  placeholder="Select Role"
                />
              )}
              rules={{ required: "Role is required" }}
            />
            {errors.teamMembers && errors.teamMembers[index]?.role && (
              <ErrorText>{errors.teamMembers[index].role.message}</ErrorText>
            )}

            <Label>Contact Information</Label>
            <Input
              type="text"
              placeholder="Enter contact"
              {...register(`teamMembers.${index}.contact`, {
                required: "Contact is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Contact must be a number",
                },
              })}
            />
            {errors.teamMembers && errors.teamMembers[index]?.contact && (
              <ErrorText>{errors.teamMembers[index].contact.message}</ErrorText>
            )}

            <Label>Is Manager?</Label>
            <SelectStyled
              {...register(`teamMembers.${index}.manager`)}
              defaultValue="false"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </SelectStyled>

            <Button remove type="button" onClick={() => remove(index)}>
              Remove
            </Button>
          </FormGroup>
        ))}

        <Button
          type="button"
          onClick={() =>
            append({ name: "", role: "", contact: "", manager: false })
          }
        >
          Add Team Member
        </Button>

        <Button type="submit">Save Allocation</Button>
      </form>
    </FormContainer>
  );
};

export default TeamAllocation;
