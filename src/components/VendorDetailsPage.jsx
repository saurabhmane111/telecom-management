import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
    margin: 20px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    background-color: #f8f9fa;
`;

const TableRow = styled.tr`
    border-bottom: 1px solid #dee2e6;
`;

const TableCell = styled.td`
    padding: 10px;
    text-align: left;
`;

const VendorDetailsPage = () => {
    const location = useLocation();
    const { checkedVendors } = location.state || { checkedVendors: [] }; // Fallback to an empty array

    return (
        <Container>
            <h1>Vendor Details</h1>
            {checkedVendors.length === 0 ? (
                <p>No vendors selected.</p>
            ) : (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Vendor Name</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Details</TableCell> {/* Additional column for Name Details link */}
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {checkedVendors.map((vendor, index) => (
                            <TableRow key={index}>
                                <TableCell>{vendor.name}</TableCell>
                                <TableCell>{vendor.company}</TableCell>
                                <TableCell>{vendor.category}</TableCell>
                                <TableCell>{vendor.phone}</TableCell>
                                <TableCell>{vendor.email}</TableCell>
                                <TableCell>{vendor.location}</TableCell>
                                <TableCell>
                                    <a href={`/vendor-details/${vendor.name}`}>Details</a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default VendorDetailsPage;
