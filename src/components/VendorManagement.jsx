import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 20px;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
`;

const LoginButton = styled.button`
    background-color: #fff;
    color: #007bff;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #e6e6e6;
    }
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 25%;
    padding: 8px;
    margin-right: 10px;
    border-radius: 4px;
    border: 1px solid #ced4da;
`;

const Select = styled.select`
    width: 25%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ced4da;
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

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    cursor: pointer;
    width: 18px;
    height: 18px;
    accent-color: blue;

    &:checked {
        background-color: blue;
        border-color: blue;
    }
`;

const ProcessedButton = styled.button`
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: ${props => (props.show ? 'block' : 'none')};

    &:hover {
        background-color: #218838;
    }
`;

const vendors = [
    // Dummy data as before
    { company: "RouterTech", name: "Vendor A", category: "routers", phone: "123-456-7890", email: "vendorA@routertech.com", location: "New York" },
    { company: "CableLink", name: "Vendor B", category: "cables", phone: "234-567-8901", email: "vendorB@cablelink.com", location: "Los Angeles" },
    { company: "SwitchNet", name: "Vendor C", category: "switches", phone: "345-678-9012", email: "vendorC@switchnet.com", location: "Chicago" },
    { company: "RouterPro", name: "Vendor D", category: "routers", phone: "456-789-0123", email: "vendorD@routerpro.com", location: "Houston" },
    { company: "TransistCo", name: "Vendor E", category: "transistors", phone: "567-890-1234", email: "vendorE@transistco.com", location: "Phoenix" },
    { company: "CableWorld", name: "Vendor F", category: "cables", phone: "678-901-2345", email: "vendorF@cableworld.com", location: "Philadelphia" },
    { company: "SwitchTech", name: "Vendor G", category: "switches", phone: "789-012-3456", email: "vendorG@switchtech.com", location: "San Antonio" },
    { company: "RouterMaster", name: "Vendor H", category: "routers", phone: "890-123-4567", email: "vendorH@routermaster.com", location: "San Diego" },
    { company: "TransistWorks", name: "Vendor I", category: "transistors", phone: "901-234-5678", email: "vendorI@transistworks.com", location: "Dallas" },
    { company: "CableSolutions", name: "Vendor J", category: "cables", phone: "012-345-6789", email: "vendorJ@cablesolutions.com", location: "San Jose" },
    { company: "RouterExperts", name: "Vendor K", category: "routers", phone: "123-456-7890", email: "vendorK@routerexperts.com", location: "Austin" },
    { company: "SwitchWorld", name: "Vendor L", category: "switches", phone: "234-567-8901", email: "vendorL@switchworld.com", location: "Fort Worth" },
    { company: "TransistHub", name: "Vendor M", category: "transistors", phone: "345-678-9012", email: "vendorM@transisthub.com", location: "Jacksonville" },
    { company: "CableNetworks", name: "Vendor N", category: "cables", phone: "456-789-0123", email: "vendorN@cablenetworks.com", location: "Columbus" },
    { company: "SwitchSystems", name: "Vendor O", category: "switches", phone: "567-890-1234", email: "vendorO@switchsystems.com", location: "Charlotte" },
    { company: "RouterSolutions", name: "Vendor P", category: "routers", phone: "678-901-2345", email: "vendorP@routersolutions.com", location: "Indianapolis" },
    { company: "TransistDevices", name: "Vendor Q", category: "transistors", phone: "789-012-3456", email: "vendorQ@transistdevices.com", location: "San Francisco" },
    { company: "CableExperts", name: "Vendor R", category: "cables", phone: "890-123-4567", email: "vendorR@cableexperts.com", location: "Seattle" },
    { company: "SwitchPro", name: "Vendor S", category: "switches", phone: "901-234-5678", email: "vendorS@switchpro.com", location: "Denver" },
    { company: "RouterNet", name: "Vendor T", category: "routers", phone: "012-345-6789", email: "vendorT@routernet.com", location: "Washington" }
    // Add more vendors as needed...
];

const VendorTable = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [checkedVendors, setCheckedVendors] = useState([]);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleCheckboxChange = (vendor) => {
        setCheckedVendors((prevChecked) =>
            prevChecked.includes(vendor)
                ? prevChecked.filter((v) => v !== vendor)
                : [...prevChecked, vendor]
        );
    };

    const handleProcessedClick = () => {
        console.log('Processed Vendors:', checkedVendors);
        // Handle your processing logic here
    };

    const filteredVendors = vendors.filter(vendor => {
        const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
        const matchesSearch = vendor.name.toLowerCase().includes(searchText) || vendor.company.toLowerCase().includes(searchText);
        return matchesCategory && matchesSearch;
    });

    return (
        <Container>
            <Header>
                <h1>Vendor List</h1>
                <LoginButton>Login</LoginButton>
            </Header>
            <FilterContainer>
                <Input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Search Vendors"
                />
                <Select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="all">All Categories</option>
                    <option value="cables">Cables</option>
                    <option value="switches">Switches</option>
                    <option value="routers">Routers</option>
                    <option value="transistors">Transistors</option>
                </Select>
            </FilterContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Check</TableCell>
                        <TableCell>Vendor Name</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Location</TableCell>
                    </TableRow>
                </TableHead>
                <tbody>
                    {filteredVendors.map((vendor, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Checkbox
                                    type="checkbox"
                                    checked={checkedVendors.includes(vendor)}
                                    onChange={() => handleCheckboxChange(vendor)}
                                />
                            </TableCell>
                            <TableCell>{vendor.name}</TableCell>
                            <TableCell>{vendor.company}</TableCell>
                            <TableCell>{vendor.category.charAt(0).toUpperCase() + vendor.category.slice(1)}</TableCell>
                            <TableCell>{vendor.phone}</TableCell>
                            <TableCell>{vendor.email}</TableCell>
                            <TableCell>{vendor.location}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            <ProcessedButton show={checkedVendors.length > 0} onClick={handleProcessedClick}>
                Processed
            </ProcessedButton>
        </Container>
    );
};

export default VendorTable;

