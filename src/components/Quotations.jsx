import React, { useState } from "react";
import styled from "styled-components";

const QuotationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 8px 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SignatureContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const QuotationsComponent = () => {
  const [quotationData, setQuotationData] = useState({
    clientName: "XYZ Telecom Pvt Ltd",
    address: "123 Telecom Street, New Delhi, India",
    contactPerson: "Rahul Sharma",
    contactInfo: "rahul.sharma@xyztelecom.com | +91-9876543210",
    projectName: "Metro Fiber Network Expansion",
    siteLocation: "Delhi NCR Region",
    projectStartDate: "01-Oct-2024",
    expectedCompletionDate: "31-Dec-2024",
    equipmentCosts: [
      {
        description: "Fiber Optic Cables",
        quantity: 1000,
        unitPrice: 200,
        totalCost: 200000,
      },
      {
        description: "Network Switches",
        quantity: 50,
        unitPrice: 5000,
        totalCost: 250000,
      },
      {
        description: "Optical Splitters",
        quantity: 200,
        unitPrice: 300,
        totalCost: 60000,
      },
    ],
    laborCosts: [
      {
        description: "Installation Technicians",
        quantity: 10,
        unitPrice: 1500,
        totalCost: 15000,
      },
      {
        description: "Project Manager",
        quantity: 1,
        unitPrice: 5000,
        totalCost: 5000,
      },
    ],
    installationCosts: [
      {
        description: "Site Survey",
        quantity: 1,
        unitPrice: 10000,
        totalCost: 10000,
      },
      {
        description: "Cable Laying",
        quantity: 1000,
        unitPrice: 50,
        totalCost: 50000,
      },
    ],
    maintenanceCosts: [
      {
        description: "Annual Maintenance Contract (AMC)",
        quantity: 1,
        unitPrice: 30000,
        totalCost: 30000,
      },
    ],
    additionalServices: [
      {
        description: "Network Optimization",
        quantity: 1,
        unitPrice: 15000,
        totalCost: 15000,
      },
    ],
    contingencyCosts: 10000,
    subtotal: 0,
    taxes: 0,
    totalCost: 0,
  });

  const calculateTotalCost = () => {
    const subtotal =
      quotationData.equipmentCosts.reduce(
        (sum, item) => sum + item.totalCost,
        0
      ) +
      quotationData.laborCosts.reduce((sum, item) => sum + item.totalCost, 0) +
      quotationData.installationCosts.reduce(
        (sum, item) => sum + item.totalCost,
        0
      ) +
      quotationData.maintenanceCosts.reduce(
        (sum, item) => sum + item.totalCost,
        0
      ) +
      quotationData.additionalServices.reduce(
        (sum, item) => sum + item.totalCost,
        0
      ) +
      quotationData.contingencyCosts;
    const taxes = subtotal * 0.18; // Assume 18% tax
    const totalCost = subtotal + taxes;
    setQuotationData({ ...quotationData, subtotal, taxes, totalCost });
  };

  return (
    <QuotationsContainer>
      <Header>Telecom Infrastructure Quotation</Header>

      {/* Client Information Section */}
      <Section>
        <SectionTitle>Client Information</SectionTitle>
        <Table>
          <tbody>
            <tr>
              <th>Client Name</th>
              <td>{quotationData.clientName}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{quotationData.address}</td>
            </tr>
            <tr>
              <th>Contact Person</th>
              <td>{quotationData.contactPerson}</td>
            </tr>
            <tr>
              <th>Contact Information</th>
              <td>{quotationData.contactInfo}</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      {/* Project Details Section */}
      <Section>
        <SectionTitle>Project Details</SectionTitle>
        <Table>
          <tbody>
            <tr>
              <th>Project Name/ID</th>
              <td>{quotationData.projectName}</td>
            </tr>
            <tr>
              <th>Site Location</th>
              <td>{quotationData.siteLocation}</td>
            </tr>
            <tr>
              <th>Project Start Date</th>
              <td>{quotationData.projectStartDate}</td>
            </tr>
            <tr>
              <th>Expected Completion Date</th>
              <td>{quotationData.expectedCompletionDate}</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      {/* Itemized Cost Breakdown Section */}
      <Section>
        <SectionTitle>Itemized Cost Breakdown</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price (₹)</th>
              <th>Total Cost (₹)</th>
            </tr>
          </thead>
          <tbody>
            {quotationData.equipmentCosts.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.totalCost}</td>
              </tr>
            ))}
            {quotationData.laborCosts.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.totalCost}</td>
              </tr>
            ))}
            {quotationData.installationCosts.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.totalCost}</td>
              </tr>
            ))}
            {quotationData.maintenanceCosts.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.totalCost}</td>
              </tr>
            ))}
            {quotationData.additionalServices.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.totalCost}</td>
              </tr>
            ))}
            <tr>
              <td>Contingency Costs</td>
              <td>-</td>
              <td>-</td>
              <td>{quotationData.contingencyCosts}</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      {/* Terms and Conditions */}
      <Section>
        <SectionTitle>Terms and Conditions</SectionTitle>
        <p>Payment Terms: 50% advance, 50% upon completion</p>
        <p>Warranty Information: 1-year warranty on all equipment</p>
        <p>Delivery Terms: Within 90 days of order confirmation</p>
        <p>
          Validity Period: Quotation valid for 30 days from the date of issue
        </p>
      </Section>

      {/* Total Costs and Taxes */}
      <TotalContainer>
        <div>
          <p>Subtotal: ₹{quotationData.subtotal.toFixed(2)}</p>
          <p>Taxes (18% GST): ₹{quotationData.taxes.toFixed(2)}</p>
        </div>
        <div>
          <h3>Total: ₹{quotationData.totalCost.toFixed(2)}</h3>
        </div>
      </TotalContainer>

      {/* Signature Section */}
      <SignatureContainer>
        <div>
          <p>Authorized Signature:</p>
          <p>________________________</p>
          <p>Name: Rahul Sharma</p>
        </div>
        <div>
          <p>Date:</p>
          <p>________________________</p>
        </div>
      </SignatureContainer>

      <Button onClick={calculateTotalCost}>Calculate Total</Button>
    </QuotationsContainer>
  );
};

export default QuotationsComponent;
