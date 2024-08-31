// src/components/InvoiceTable.js
import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  border-bottom: 2px solid #ddd;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TableHeader = styled.thead`
  background-color: #f4f4f4;
`;

const TableRow = styled.tr``;

function InvoiceTable() {
  // Example data
  const invoices = [
    { id: 1, date: "2024-08-01", amount: "₹5000", status: "Paid" },
    { id: 2, date: "2024-08-15", amount: "₹7500", status: "Pending" },
    { id: 3, date: "2024-08-20", amount: "₹2000", status: "Paid" },
  ];

  return (
    <TableContainer>
      <h2>Invoice Table</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <Th>Invoice ID</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </TableRow>
        </TableHeader>
        <tbody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <Td>{invoice.id}</Td>
              <Td>{invoice.date}</Td>
              <Td>{invoice.amount}</Td>
              <Td>{invoice.status}</Td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default InvoiceTable;
