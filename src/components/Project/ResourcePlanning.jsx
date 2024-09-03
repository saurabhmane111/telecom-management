import React, { useState } from 'react';
import styled from 'styled-components';

// Dummy data for resources
const dummyResources = [
  { id: 1, name: 'Network Switch', type: 'Hardware', availability: 'In Stock', location: 'Warehouse A', lastUpdated: '2024-09-01T14:00:00Z' },
  { id: 2, name: 'Router', type: 'Hardware', availability: 'Out of Stock', location: 'Warehouse B', lastUpdated: '2024-09-02T08:00:00Z' },
  { id: 3, name: 'Firewall Software', type: 'Software', availability: 'In Stock', location: 'Digital Inventory', lastUpdated: '2024-09-01T10:00:00Z' },
  { id: 4, name: 'Network Cable', type: 'Hardware', availability: 'On Order', location: 'Warehouse C', lastUpdated: '2024-09-02T12:00:00Z' },
  { id: 5, name: 'VPN Service', type: 'Software', availability: 'In Stock', location: 'Digital Inventory', lastUpdated: '2024-09-01T09:00:00Z' },
  { id: 6, name: 'Patch Panel', type: 'Hardware', availability: 'In Stock', location: 'Warehouse A', lastUpdated: '2024-09-01T11:00:00Z' },
  { id: 7, name: 'Access Point', type: 'Hardware', availability: 'On Order', location: 'Warehouse B', lastUpdated: '2024-09-02T07:00:00Z' },
  { id: 8, name: 'Network Printer', type: 'Hardware', availability: 'In Stock', location: 'Warehouse A', lastUpdated: '2024-09-01T15:00:00Z' },
  { id: 9, name: 'Bandwidth Monitor', type: 'Software', availability: 'In Stock', location: 'Digital Inventory', lastUpdated: '2024-09-01T16:00:00Z' },
  { id: 10, name: 'Server Rack', type: 'Hardware', availability: 'Out of Stock', location: 'Warehouse C', lastUpdated: '2024-09-02T13:00:00Z' },
  { id: 11, name: 'Power Supply', type: 'Hardware', availability: 'In Stock', location: 'Warehouse A', lastUpdated: '2024-09-01T17:00:00Z' },
  { id: 12, name: 'Load Balancer', type: 'Hardware', availability: 'In Stock', location: 'Warehouse B', lastUpdated: '2024-09-01T18:00:00Z' },
  { id: 13, name: 'Network Monitoring Tool', type: 'Software', availability: 'On Order', location: 'Digital Inventory', lastUpdated: '2024-09-02T09:00:00Z' },
  { id: 14, name: 'Ethernet Switch', type: 'Hardware', availability: 'In Stock', location: 'Warehouse A', lastUpdated: '2024-09-01T14:00:00Z' },
  { id: 15, name: 'Antivirus Software', type: 'Software', availability: 'In Stock', location: 'Digital Inventory', lastUpdated: '2024-09-02T10:00:00Z' },
  { id: 16, name: 'Backup Drive', type: 'Hardware', availability: 'In Stock', location: 'Warehouse B', lastUpdated: '2024-09-01T11:00:00Z' },
  { id: 17, name: 'VoIP Phone', type: 'Hardware', availability: 'Out of Stock', location: 'Warehouse C', lastUpdated: '2024-09-02T14:00:00Z' },
  { id: 18, name: 'Security Camera', type: 'Hardware', availability: 'On Order', location: 'Warehouse A', lastUpdated: '2024-09-01T12:00:00Z' },
  { id: 19, name: 'Data Recovery Software', type: 'Software', availability: 'In Stock', location: 'Digital Inventory', lastUpdated: '2024-09-01T13:00:00Z' },
  { id: 20, name: 'UPS Battery', type: 'Hardware', availability: 'In Stock', location: 'Warehouse B', lastUpdated: '2024-09-02T15:00:00Z' },
];

const ResourcePlanningContainer = styled.div`
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

const ResourceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResourceItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ResourcePlanning = () => {
  const [resourceName, setResourceName] = useState('Network Switch');
  const [resourceType, setResourceType] = useState('Hardware');
  const [quantity, setQuantity] = useState(10);
  const [availability, setAvailability] = useState('In Stock');
  const [taskRequirements, setTaskRequirements] = useState('Installation of switches in main server room.');

  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchAvailability, setSearchAvailability] = useState('');

  const filteredResources = dummyResources.filter(resource => {
    return (
      (searchName === '' || resource.name.toLowerCase().includes(searchName.toLowerCase())) &&
      (searchType === '' || resource.type === searchType) &&
      (searchAvailability === '' || resource.availability === searchAvailability)
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      resourceName,
      resourceType,
      quantity,
      availability,
      taskRequirements,
    });
  };

  return (
    <ResourcePlanningContainer>
      <h2>Resource Planning</h2>
      <form onSubmit={handleSubmit}>
        {/* Resource Details */}
        <Section>
          <SectionTitle>Resource Details</SectionTitle>
          <FormLabel htmlFor="resourceName">Resource Name</FormLabel>
          <FormInput
            id="resourceName"
            type="text"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
            required
          />
          
          <FormLabel htmlFor="resourceType">Resource Type</FormLabel>
          <Select
            id="resourceType"
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
            required
          >
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Human Resource">Human Resource</option>
          </Select>

          <FormLabel htmlFor="quantity">Quantity</FormLabel>
          <FormInput
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </Section>

        {/* Availability */}
        <Section>
          <SectionTitle>Availability</SectionTitle>
          <FormLabel htmlFor="availability">Availability Status</FormLabel>
          <Select
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          >
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="On Order">On Order</option>
          </Select>
        </Section>

        {/* Task Requirements */}
        <Section>
          <SectionTitle>Task Requirements</SectionTitle>
          <FormLabel htmlFor="taskRequirements">Task Requirements</FormLabel>
          <TextArea
            id="taskRequirements"
            rows="4"
            value={taskRequirements}
            onChange={(e) => setTaskRequirements(e.target.value)}
            required
          />
        </Section>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>

      {/* Search and Filter Section */}
      <Section>
        <SectionTitle>Search and Filter Resources</SectionTitle>

        {/* Search by Name */}
        <FormLabel htmlFor="searchName">Search by Name:</FormLabel>
        <FormInput
          id="searchName"
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />

        {/* Filter by Resource Type */}
        <FormLabel htmlFor="searchType">Filter by Type:</FormLabel>
        <Select
          id="searchType"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Human Resource">Human Resource</option>
        </Select>

        {/* Filter by Availability */}
        <FormLabel htmlFor="searchAvailability">Filter by Availability:</FormLabel>
        <Select
          id="searchAvailability"
          value={searchAvailability}
          onChange={(e) => setSearchAvailability(e.target.value)}
        >
          <option value="">All Availability</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="On Order">On Order</option>
        </Select>

        {/* Resource List */}
        <ResourceList>
          {filteredResources.map((resource) => (
            <ResourceItem key={resource.id}>
              <strong>{resource.name}</strong> - {resource.type} - {resource.availability}
            </ResourceItem>
          ))}
        </ResourceList>
      </Section>
    </ResourcePlanningContainer>
  );
};

export default ResourcePlanning;
