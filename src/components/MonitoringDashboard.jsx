// src/components/MonitoringDashboard.js
import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  AreaChartContainer,
  BarChartContainer,
  LineChartContainer,
  PieChartContainer,
  Widget,
  WidgetContent,
  WidgetTitle,
} from "./styles";

// Sample data
const salesData = [
  { name: "Leads", value: 400 },
  { name: "Appointments", value: 300 },
];

const orderData = [
  { name: "Placed", value: 50 },
  { name: "Fulfilled", value: 30 },
  { name: "Pending", value: 20 },
];

const installationData = [
  { name: "Installation A", duration: 30 },
  { name: "Installation B", duration: 50 },
  { name: "Installation C", duration: 40 },
];

const networkHealthData = [
  { name: "Region 1", value: 80 },
  { name: "Region 2", value: 70 },
  { name: "Region 3", value: 90 },
];

const financialData = [
  { name: "January", revenue: 4000, cost: 2400 },
  { name: "February", revenue: 3000, cost: 1398 },
  { name: "March", revenue: 2000, cost: 9800 },
];

const MonitoringDashboard = () => (
  <div>
    <Widget>
      <WidgetTitle>Sales Overview</WidgetTitle>
      <WidgetContent>
        <BarChartContainer>
          <BarChart width={600} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </BarChartContainer>
      </WidgetContent>
    </Widget>

    <Widget>
      <WidgetTitle>Order Status</WidgetTitle>
      <WidgetContent>
        <PieChartContainer>
          <PieChart width={600} height={300}>
            <Pie
              data={orderData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              <Cell fill="#ff7300" />
              <Cell fill="#387908" />
              <Cell fill="#8884d8" />
            </Pie>
            <Tooltip />
          </PieChart>
        </PieChartContainer>
      </WidgetContent>
    </Widget>

    <Widget>
      <WidgetTitle>Installation Dashboard</WidgetTitle>
      <WidgetContent>
        <AreaChartContainer>
          <AreaChart width={600} height={300} data={installationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="duration"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </AreaChartContainer>
      </WidgetContent>
    </Widget>

    <Widget>
      <WidgetTitle>Network Health</WidgetTitle>
      <WidgetContent>
        <PieChartContainer>
          <PieChart width={600} height={300}>
            <Pie
              data={networkHealthData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              fill="#82ca9d"
              label
            >
              <Cell fill="#8884d8" />
              <Cell fill="#83a6ed" />
              <Cell fill="#8dd1e1" />
            </Pie>
            <Tooltip />
          </PieChart>
        </PieChartContainer>
      </WidgetContent>
    </Widget>

    <Widget>
      <WidgetTitle>Financial Summary</WidgetTitle>
      <WidgetContent>
        <LineChartContainer>
          <LineChart width={600} height={300} data={financialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
          </LineChart>
        </LineChartContainer>
      </WidgetContent>
    </Widget>
  </div>
);

export default MonitoringDashboard;
