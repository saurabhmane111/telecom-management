// src/components/InstallationProgress.js
import React, { useState } from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const Stage = styled.div`
  margin-bottom: 10px;
`;

const StageTitle = styled.h3`
  margin: 0;
`;

const ProgressBar = styled.div`
  background-color: #f0f0f0;
  border-radius: 4px;
  height: 20px;
  width: 100%;
  position: relative;
`;

const ProgressFill = styled.div`
  background-color: #007bff;
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 4px;
`;

function InstallationProgress() {
  const [progress, setProgress] = useState({
    planning: 40,
    execution: 70,
    completion: 20,
  });

  return (
    <ProgressContainer>
      <h2>Installation Progress</h2>
      <Stage>
        <StageTitle>Planning</StageTitle>
        <ProgressBar>
          <ProgressFill width={progress.planning} />
        </ProgressBar>
      </Stage>
      <Stage>
        <StageTitle>Execution</StageTitle>
        <ProgressBar>
          <ProgressFill width={progress.execution} />
        </ProgressBar>
      </Stage>
      <Stage>
        <StageTitle>Completion</StageTitle>
        <ProgressBar>
          <ProgressFill width={progress.completion} />
        </ProgressBar>
      </Stage>
    </ProgressContainer>
  );
}

export default InstallationProgress;
