// src/components/LeadManagement.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TasksBoard from "./TasksBoard"; // Import TasksBoard component

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: #f4f6f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
`;

const LeadForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LeadList = styled.div`
  margin-top: 20px;
`;

const LeadItem = styled.div`
  background: #fff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const TagInput = styled.input`
  margin-right: 10px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TagList = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CampaignSection = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

const HistorySection = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

const LeadManagement = () => {
  const { register, handleSubmit, reset } = useForm();
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [tags, setTags] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const onSubmit = (data) => {
    if (selectedLead) {
      // Edit lead
      setLeads(
        leads.map((lead) =>
          lead.id === selectedLead.id ? { ...data, id: lead.id, tags } : lead
        )
      );
      setSelectedLead(null);
    } else {
      // Add lead
      setLeads([...leads, { ...data, id: Date.now(), tags }]);
    }
    setTags([]);
    reset();
  };

  const handleEdit = (lead) => {
    setSelectedLead(lead);
    reset({
      leadName: lead.leadName,
      contactInfo: lead.contactInfo,
      notes: lead.notes,
    });
    setTags(lead.tags || []);
  };

  const handleDelete = (id) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  const addTag = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleCampaignSubmit = (e) => {
    e.preventDefault();
    const campaignName = e.target.campaignName.value;
    setCampaigns([...campaigns, { id: Date.now(), name: campaignName }]);
    e.target.campaignName.value = "";
  };

  return (
    <Container>
      <Section>
        <Title>Lead Management</Title>
        <LeadForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("leadName", { required: "Lead Name is required" })}
            placeholder="Lead Name"
          />
          <Input
            {...register("contactInfo", {
              required: "Contact Information is required",
            })}
            placeholder="Contact Information"
          />
          <TextArea {...register("notes")} placeholder="Notes" rows="4" />
          <TagInput placeholder="Add tags and press Enter" onKeyDown={addTag} />
          <TagList>
            {tags.map((tag, index) => (
              <Tag key={index} onClick={() => removeTag(tag)}>
                {tag}
              </Tag>
            ))}
          </TagList>
          <Button type="submit">
            {selectedLead ? "Update Lead" : "Add Lead"}
          </Button>
        </LeadForm>

        <LeadList>
          {leads.length > 0 ? (
            leads.map((lead) => (
              <LeadItem key={lead.id}>
                <h3>{lead.leadName}</h3>
                <p>
                  <strong>Contact:</strong> {lead.contactInfo}
                </p>
                <p>
                  <strong>Notes:</strong> {lead.notes}
                </p>
                <p>
                  <strong>Tags:</strong> {lead.tags.join(", ")}
                </p>
                <ButtonGroup>
                  <Button onClick={() => handleEdit(lead)}>Edit</Button>
                  <Button onClick={() => handleDelete(lead.id)}>Delete</Button>
                </ButtonGroup>
              </LeadItem>
            ))
          ) : (
            <p>No leads available.</p>
          )}
        </LeadList>
      </Section>

      <Section>
        <Title>Campaign Management</Title>
        <CampaignSection>
          <form onSubmit={handleCampaignSubmit}>
            <Input name="campaignName" placeholder="Campaign Name" />
            <Button type="submit">Add Campaign</Button>
          </form>
          <ul>
            {campaigns.map((campaign) => (
              <li key={campaign.id}>{campaign.name}</li>
            ))}
          </ul>
        </CampaignSection>
      </Section>

      <Section>
        <Title>Lead History</Title>
        <HistorySection>
          <p>
            View lead history and interactions here. (This can be extended with
            more detailed history tracking and visualization.)
          </p>
        </HistorySection>
      </Section>
    </Container>
  );
};

export default LeadManagement;
