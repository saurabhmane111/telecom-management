import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #007BFF;
  padding-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #f8f9fa;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Detail = styled.div`
  margin: 10px 0;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Content = styled.span`
  margin-left: 10px;
  color: #555;
`;

// Placeholder data
const leads = [
  { id: 1, name: 'Lead A', source: 'Website', status: 'New' },
  { id: 2, name: 'Lead B', source: 'Referral', status: 'In Progress' },
];

const opportunities = [
  { id: 1, name: 'Opportunity A', stage: 'Proposal', closeDate: '2024-09-30', probability: '60%' },
  { id: 2, name: 'Opportunity B', stage: 'Negotiation', closeDate: '2024-10-15', probability: '40%' },
];

const LeadOpportunityManagement = () => {
  return (
    <Container>
      {/* Lead Tracking */}
      <Section>
        <Title>Lead Tracking</Title>
        <List>
          {leads.map((lead) => (
            <ListItem key={lead.id}>
              <Detail>
                <Label>Name:</Label> <Content>{lead.name}</Content>
              </Detail>
              <Detail>
                <Label>Source:</Label> <Content>{lead.source}</Content>
              </Detail>
              <Detail>
                <Label>Status:</Label> <Content>{lead.status}</Content>
              </Detail>
            </ListItem>
          ))}
        </List>
      </Section>

      {/* Opportunity Management */}
      <Section>
        <Title>Opportunity Management</Title>
        <List>
          {opportunities.map((opportunity) => (
            <ListItem key={opportunity.id}>
              <Detail>
                <Label>Name:</Label> <Content>{opportunity.name}</Content>
              </Detail>
              <Detail>
                <Label>Stage:</Label> <Content>{opportunity.stage}</Content>
              </Detail>
              <Detail>
                <Label>Expected Close Date:</Label> <Content>{opportunity.closeDate}</Content>
              </Detail>
              <Detail>
                <Label>Probability:</Label> <Content>{opportunity.probability}</Content>
              </Detail>
            </ListItem>
          ))}
        </List>
      </Section>

      {/* Lead/Opportunity Details */}
      <Section>
        <Title>Lead/Opportunity Details</Title>
        <p>Detailed view of specific lead or opportunity will be implemented here.</p>
      </Section>
    </Container>
  );
};

export default LeadOpportunityManagement;
