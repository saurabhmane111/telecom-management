// src/pages/HomePage.js
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  height: 60px;
  
  color: black
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 50px;
  left: 290px; 
  right: 0;
  /* z-index: 1000; */
`;

function HomePage() {
  return (
    <NavbarContainer>
      <h1>Welcome to Telecom Management System</h1>
      <p>Select a module from the navigation menu to get started.</p>
    </NavbarContainer>
  );
}

export default HomePage;
