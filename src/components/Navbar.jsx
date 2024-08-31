// src/components/Navbar.js
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  height: 60px;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 290px; /* Align with the Sidebar width */
  right: 0;
  z-index: 1000;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Title>Telecom Management System</Title>
    </NavbarContainer>
  );
}

export default Navbar;
