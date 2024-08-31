import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data for bar chart
const data = [
  { phase: "Site Survey", progress: 80 },
  { phase: "Installation", progress: 60 },
  { phase: "Testing", progress: 40 },
  { phase: "Final Review", progress: 20 },
];

const InstallationProgress = () => {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h1>Installation Progress</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="phase" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="progress" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InstallationProgress;
