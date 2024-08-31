// src/components/AssetManagement.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const AssetContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
`;

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const AssetTable = styled.table`
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

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function AssetManagement() {
  const { register, handleSubmit, reset } = useForm();
  const [assets, setAssets] = useState([
    { id: 1, name: "Router", type: "Network", status: "Active" },
    { id: 2, name: "Switch", type: "Network", status: "Inactive" },
  ]);

  const onSubmit = (data) => {
    // Add the new asset to the list
    setAssets([...assets, { id: assets.length + 1, ...data }]);
    reset();
  };

  return (
    <AssetContainer>
      <h2>Asset Management</h2>
      <FormContainer>
        <h3>Add/Update Asset</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name", { required: true })}
            placeholder="Asset Name"
          />
          <Input
            {...register("type", { required: true })}
            placeholder="Asset Type"
          />
          <Input
            {...register("status", { required: true })}
            placeholder="Status"
          />
          <Button type="submit">Add/Update Asset</Button>
        </form>
      </FormContainer>
      <h3>Asset List</h3>
      <AssetTable>
        <TableHeader>
          <TableRow>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Status</Th>
          </TableRow>
        </TableHeader>
        <tbody>
          {assets.map((asset) => (
            <TableRow key={asset.id}>
              <Td>{asset.id}</Td>
              <Td>{asset.name}</Td>
              <Td>{asset.type}</Td>
              <Td>{asset.status}</Td>
            </TableRow>
          ))}
        </tbody>
      </AssetTable>
    </AssetContainer>
  );
}

export default AssetManagement;
