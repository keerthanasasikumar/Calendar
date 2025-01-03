import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationFrequencyReport = () => {
  // Mock data
  const communicationData = [
    { company: "Company A", method: "LinkedIn Post", frequency: 10, date: "2024-12-01" },
    { company: "Company B", method: "Email", frequency: 15, date: "2024-12-02" },
    { company: "Company A", method: "Phone Call", frequency: 5, date: "2024-12-03" },
    { company: "Company C", method: "LinkedIn Message", frequency: 12, date: "2024-12-04" },
    { company: "Company B", method: "LinkedIn Post", frequency: 8, date: "2024-12-05" },
  ];

  const [filters, setFilters] = useState({
    company: "",
    method: "",
    startDate: "",
    endDate: "",
  });

  const [filteredData, setFilteredData] = useState(communicationData);

  // Handle Filter Changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    const { company, method, startDate, endDate } = filters;

    const filtered = communicationData.filter((data) => {
      const matchesCompany = company ? data.company === company : true;
      const matchesMethod = method ? data.method === method : true;
      const matchesDate =
        (!startDate || new Date(data.date) >= new Date(startDate)) &&
        (!endDate || new Date(data.date) <= new Date(endDate));
      return matchesCompany && matchesMethod && matchesDate;
    });

    setFilteredData(filtered);
  };

  // Chart Data
  const chartData = {
    labels: filteredData.map((data) => data.method),
    datasets: [
      {
        label: "Frequency",
        data: filteredData.map((data) => data.frequency),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center">Communication Frequency Report</h2>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          name="company"
          placeholder="Filter by Company"
          value={filters.company}
          onChange={handleFilterChange}
          className="border p-2 rounded w-full"
        />
        <select
          name="method"
          value={filters.method}
          onChange={handleFilterChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Filter by Method</option>
          <option value="LinkedIn Post">LinkedIn Post</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
          <option value="LinkedIn Message">LinkedIn Message</option>
        </select>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        Apply Filters
      </button>

      {/* Chart */}
      <div className="bg-white p-6 rounded shadow-md">
        <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default CommunicationFrequencyReport;
