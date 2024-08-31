import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Sidebar Container
const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

// Sidebar Item
const SidebarItem = styled.div`
  margin-bottom: 10px;
`;

// Sidebar Link
const SidebarLink = styled.div`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #575757;
    border-radius: 4px;
  }
`;

// SubMenu Container
const SubMenu = styled.div`
  margin-left: 20px;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
`;

// SubMenu Item
const SubMenuItem = styled.div`
  margin-bottom: 5px;
`;

// SubMenu Link
const SubMenuLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  &:hover {
    background-color: #444;
    border-radius: 4px;
  }
`;

const Sidebar = () => {
  // State to manage which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  // Toggle submenu visibility
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <SidebarContainer>
      <SidebarItem>
        <SidebarLink onClick={() => toggleMenu("home")}>Home</SidebarLink>
      </SidebarItem>
      <SidebarItem>
        <SidebarLink onClick={() => toggleMenu("sales")}>
          Sales Management
        </SidebarLink>
        <SubMenu open={openMenu === "sales"}>
          <SubMenuItem>
            <SubMenuLink to="/sales/leads">Lead Management</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/sales/leadboard">Lead Task Board</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/sales/appointments">Appointments</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/sales/quotations">Quotations</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/sales/lead-opportunity-management">
              Lead and Opportunity Management
            </SubMenuLink>
          </SubMenuItem>
        </SubMenu>
      </SidebarItem>
      <SidebarItem>
        <SidebarLink onClick={() => toggleMenu("orders")}>
          Order Management
        </SidebarLink>
        <SubMenu open={openMenu === "orders"}>
          <SubMenuItem>
            <SubMenuLink to="/orders/tracking">Order Tracking</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/orders/vendors">Vendor Management</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/orders/purchase-orders">
              Purchase Orders
            </SubMenuLink>
          </SubMenuItem>
        </SubMenu>
      </SidebarItem>
      <SidebarItem>
        <SidebarLink onClick={() => toggleMenu("installations")}>
          Installation Management
        </SidebarLink>
        <SubMenu open={openMenu === "installations"}>
          <SubMenuItem>
            <SubMenuLink to="/installations/site-survey">
              Site Survey Form
            </SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/installations/team-allocation">
              Team Allocation
            </SubMenuLink>
          </SubMenuItem>

          <SubMenuItem>
            <SubMenuLink to="/installations/progress">
              Installation Progress
            </SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/installations/qa">QA Form</SubMenuLink>
          </SubMenuItem>
        </SubMenu>
      </SidebarItem>
      <SidebarItem>
        <SidebarLink onClick={() => toggleMenu("support")}>
          Post Installation Support
        </SidebarLink>
        <SubMenu open={openMenu === "support"}>
          <SubMenuItem>
            <SubMenuLink to="/support/monitoring-dashboard">
              Monitoring Dashboard
            </SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/support/maintenance-tasks">
              Maintenance Task List
            </SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/support/feedback">Feedback Form</SubMenuLink>
          </SubMenuItem>
        </SubMenu>
      </SidebarItem>
      <SidebarItem>
        <SidebarLink onClick={() => toggleMenu("financials")}>
          Financial Management
        </SidebarLink>
        <SubMenu open={openMenu === "financials"}>
          <SubMenuItem>
            <SubMenuLink to="/financials/invoices">Invoice Table</SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/financials/cost-dashboard">
              Cost Dashboard
            </SubMenuLink>
          </SubMenuItem>
          <SubMenuItem>
            <SubMenuLink to="/financials/payment-form">
              Payment Form
            </SubMenuLink>
          </SubMenuItem>
        </SubMenu>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
