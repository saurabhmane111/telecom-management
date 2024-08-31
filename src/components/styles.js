// src/styles.js
import styled from 'styled-components';

// Container for each widget
export const Widget = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;

// Title for the widget
export const WidgetTitle = styled.h3`
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
  font-size: 1.5rem;
  color: #333;
`;

// Content area inside the widget
export const WidgetContent = styled.div`
  padding-top: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styles for charts and graphs to prevent overlap and ensure they fit well
export const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Specific container styles for different types of charts
export const BarChartContainer = styled(ChartContainer)`
  /* Additional styles specific to BarChart if needed */
`;

export const PieChartContainer = styled(ChartContainer)`
  /* Additional styles specific to PieChart if needed */
`;

export const AreaChartContainer = styled(ChartContainer)`
  /* Additional styles specific to AreaChart if needed */
`;

export const LineChartContainer = styled(ChartContainer)`
  /* Additional styles specific to LineChart if needed */
`;
