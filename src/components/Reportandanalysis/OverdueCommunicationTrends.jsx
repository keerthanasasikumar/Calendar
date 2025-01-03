import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const OverdueTrendsAndReports = () => {
  const [data, setData] = useState([
    { company: "Company A", date: "2025-01-01", overdueCount: 5 },
    { company: "Company B", date: "2025-01-02", overdueCount: 3 },
    { company: "Company A", date: "2025-01-03", overdueCount: 6 },
    { company: "Company C", date: "2025-01-04", overdueCount: 2 },
    { company: "Company B", date: "2025-01-05", overdueCount: 4 },
  ]);

  const [filters, setFilters] = useState({ company: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    if (filters.company) {
      setFilteredData(data.filter((d) => d.company === filters.company));
    } else {
      setFilteredData(data);
    }
  };

  const [filteredData, setFilteredData] = useState(data);

  // Chart Data
  const chartData = {
    labels: filteredData.map((item) => item.date),
    datasets: [
      {
        label: "Overdue Communications",
        data: filteredData.map((item) => item.overdueCount),
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Download PDF Report
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Overdue Communication Trends Report", 10, 10);

    let yPosition = 20;
    filteredData.forEach((item) => {
      doc.text(
        `${item.date} - ${item.company}: ${item.overdueCount} overdue communications`,
        10,
        yPosition
      );
      yPosition += 10;
    });

    doc.save("Overdue_Communication_Trends_Report.pdf");
  };

  // CSV Headers
  const csvHeaders = [
    { label: "Company", key: "company" },
    { label: "Date", key: "date" },
    { label: "Overdue Count", key: "overdueCount" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center">Overdue Communication Trends and Reports</h2>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          name="company"
          value={filters.company}
          onChange={handleFilterChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Filter by Company</option>
          {Array.from(new Set(data.map((d) => d.company))).map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </div>

      {/* Trendline Chart */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Overdue Communication Trendline</h3>
        <Line data={chartData} />
      </div>

      {/* Export Buttons */}
      <div className="flex space-x-4">
        <CSVLink
          data={filteredData}
          headers={csvHeaders}
          filename="Overdue_Communication_Trends.csv"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Download CSV
        </CSVLink>
        <button
          onClick={downloadPDF}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default OverdueTrendsAndReports;
