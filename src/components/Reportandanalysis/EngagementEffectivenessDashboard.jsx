import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EngagementEffectivenessDashboard = () => {
  // Mock data
  const communicationData = [
    { method: "LinkedIn Post", sent: 50, successful: 30 },
    { method: "Email", sent: 40, successful: 25 },
    { method: "Phone Call", sent: 30, successful: 20 },
    { method: "LinkedIn Message", sent: 20, successful: 15 },
  ];

  const [filters, setFilters] = useState({ method: "", minSuccessRate: 0 });
  const [filteredData, setFilteredData] = useState(communicationData);

  // Handle Filter Changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    const { method, minSuccessRate } = filters;

    const filtered = communicationData.filter((data) => {
      const successRate = (data.successful / data.sent) * 100;
      const matchesMethod = method ? data.method === method : true;
      const matchesSuccessRate = successRate >= minSuccessRate;
      return matchesMethod && matchesSuccessRate;
    });

    setFilteredData(filtered);
  };

  // Chart Data for Pie
  const pieData = {
    labels: filteredData.map((data) => data.method),
    datasets: [
      {
        data: filteredData.map((data) => (data.successful / data.sent) * 100),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Chart Data for Bar
  const barData = {
    labels: filteredData.map((data) => data.method),
    datasets: [
      {
        label: "Success Rate (%)",
        data: filteredData.map((data) => (data.successful / data.sent) * 100),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center">Engagement Effectiveness Dashboard</h2>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          name="method"
          value={filters.method}
          onChange={handleFilterChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Filter by Method</option>
          {communicationData.map((data, index) => (
            <option key={index} value={data.method}>
              {data.method}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="minSuccessRate"
          placeholder="Min Success Rate (%)"
          value={filters.minSuccessRate}
          onChange={handleFilterChange}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded shadow-md h-96">
          <h3 className="text-xl font-semibold mb-4">Success Rate by Communication Method</h3>
          <Pie data={pieData} className="flex items-center p-6" />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow-md h-96">
          <h3 className="text-xl font-semibold mb-4">Success Rate (%)</h3>
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default EngagementEffectivenessDashboard;
