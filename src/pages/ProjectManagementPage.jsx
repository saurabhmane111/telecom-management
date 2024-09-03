import { Route, Routes, Link } from "react-router-dom"; // Corrected `Rotues` to `Routes`
import ProjectInitialization from "../components/Project/ProjectInitialization";
import TaskBreakdownScheduling from "../components/Project/TaskBreakdownScheduling";
import ExecutionMonitoring from "../components/Project/ExecutionMonitoring";
import CollaborationCommunication from "../components/Project/CollaborationCommunication";
import ProgressReportingAdjustments from "../components/Project/ProgressReportingAdjustments";
import ProjectCompletionHandover from "../components/Project/ProjectCompletionHandover";
import styled from "styled-components";
import ResourcePlanning from "../components/Project/ResourcePlanning";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;

const ContentContainer = styled.div`
  width: 80%;
`;

const ProjectManagementPage = () => {
  return (
    <PageContainer>
      {/* <NavBar>
        <NavLink to="initialization">Project Initialization</NavLink>
        <NavLink to="task-scheduling">Task Breakdown & Scheduling</NavLink>
        <NavLink to="resource-planning">Resource Planning</NavLink>
        <NavLink to="execution-monitoring">Execution & Monitoring</NavLink>
        <NavLink to="collaboration">Collaboration & Communication</NavLink>
        <NavLink to="reporting">Progress Reporting & Adjustments</NavLink>
        <NavLink to="completion-handover">
          Project Completion & Handover
        </NavLink>
      </NavBar> */}

      <ContentContainer>
        <Routes>
          <Route path="/initialization" element={<ProjectInitialization />} />
          <Route
            path="/task-scheduling"
            element={<TaskBreakdownScheduling />}
          />
          <Route path="/resource-planning" element={<ResourcePlanning />} />
          <Route
            path="/execution-monitoring"
            element={<ExecutionMonitoring />}
          />
          <Route
            path="/collaboration"
            element={<CollaborationCommunication />}
          />
          <Route path="/reporting" element={<ProgressReportingAdjustments />} />
          <Route
            path="/completion-handover"
            element={<ProjectCompletionHandover />}
          />
        </Routes>
      </ContentContainer>
    </PageContainer>
  );
};

export default ProjectManagementPage;
