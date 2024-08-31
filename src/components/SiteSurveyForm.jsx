// src/components/SiteSurveyForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
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

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const FileInput = styled.input.attrs({ type: "file" })`
  width: 100%;
  padding: 0;
`;

const SiteSurveyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <h1>Site Survey Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Company Name</Label>
          <Input type="text" {...register("companyName")} />
        </FormGroup>
        <FormGroup>
          <Label>Project Name</Label>
          <Input type="text" {...register("projectName")} />
        </FormGroup>
        <FormGroup>
          <Label>Survey Date</Label>
          <Input type="date" {...register("surveyDate")} />
        </FormGroup>
        <FormGroup>
          <Label>Survey Engineer Name</Label>
          <Input type="text" {...register("engineerName")} />
        </FormGroup>
        <FormGroup>
          <Label>Contact Information</Label>
          <Input type="text" {...register("contactInfo")} />
        </FormGroup>
        <FormGroup>
          <Label>Survey Location</Label>
          <Input type="text" {...register("surveyLocation")} />
        </FormGroup>

        <FormGroup>
          <Label>Site Type</Label>
          <Select {...register("siteType")}>
            <option value="office">Office</option>
            <option value="residential">Residential</option>
            <option value="industrial">Industrial</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Site Address</Label>
          <Input type="text" {...register("siteAddress")} />
        </FormGroup>

        <FormGroup>
          <Label>Site Layout Sketch</Label>
          <FileInput {...register("siteLayoutSketch")} />
        </FormGroup>

        <FormGroup>
          <Label>Existing Network Equipment</Label>
          <Textarea rows="4" {...register("existingEquipment")} />
        </FormGroup>

        <FormGroup>
          <Label>Site Environment</Label>
          <Select {...register("siteEnvironment")}>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="both">Both</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Power Supply Availability</Label>
          <Select {...register("powerSupplyAvailability")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Power Supply Specifications</Label>
          <Textarea rows="4" {...register("powerSupplySpecs")} />
        </FormGroup>

        <FormGroup>
          <Label>Cooling Requirements</Label>
          <Select {...register("coolingRequirements")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="na">N/A</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Environmental Challenges</Label>
          <Textarea rows="4" {...register("envChallenges")} />
        </FormGroup>

        <FormGroup>
          <Label>Required Network Type</Label>
          <Select {...register("networkType")}>
            <option value="wired">Wired</option>
            <option value="wireless">Wireless</option>
            <option value="hybrid">Hybrid</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Bandwidth Requirements</Label>
          <Input type="text" {...register("bandwidthRequirements")} />
        </FormGroup>

        <FormGroup>
          <Label>Number of Users</Label>
          <Input type="number" {...register("numberOfUsers")} />
        </FormGroup>

        <FormGroup>
          <Label>Special Requirements</Label>
          <Textarea rows="4" {...register("specialRequirements")} />
        </FormGroup>

        <FormGroup>
          <Label>Access to Site</Label>
          <Select {...register("accessToSite")}>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Permits Required</Label>
          <Select {...register("permitsRequired")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Building Restrictions</Label>
          <Textarea rows="4" {...register("buildingRestrictions")} />
        </FormGroup>

        <FormGroup>
          <Label>Cable Routing Challenges</Label>
          <Textarea rows="4" {...register("cableRoutingChallenges")} />
        </FormGroup>

        <FormGroup>
          <Label>Mounting and Installation Constraints</Label>
          <Textarea rows="4" {...register("mountingConstraints")} />
        </FormGroup>

        <FormGroup>
          <Label>Safety Precautions</Label>
          <Textarea rows="4" {...register("safetyPrecautions")} />
        </FormGroup>

        <FormGroup>
          <Label>Compliance with Local Regulations</Label>
          <Select {...register("complianceRegulations")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Required Safety Gear</Label>
          <Textarea rows="4" {...register("safetyGear")} />
        </FormGroup>

        <FormGroup>
          <Label>Survey Findings</Label>
          <Textarea rows="4" {...register("surveyFindings")} />
        </FormGroup>

        <FormGroup>
          <Label>Recommendations</Label>
          <Textarea rows="4" {...register("recommendations")} />
        </FormGroup>

        <FormGroup>
          <Label>Site Photos</Label>
          <FileInput {...register("sitePhotos")} multiple />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Submit Survey</Button>
        </FormGroup>
      </form>
    </FormContainer>
  );
};

export default SiteSurveyForm;
