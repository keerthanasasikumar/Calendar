// CommunicationAction.jsx
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

const CommunicationAction = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [communicationData, setCommunicationData] = useState({
    type: "",
    date: "",
    notes: "",
  });

  const [companies] = useState([
    { id: 1, name: "Company A" },
    { id: 2, name: "Company B" },
    { id: 3, name: "Company C" },
  ]);

  const handleCheckboxChange = (id) => {
    setSelectedCompanies((prev) =>
      prev.includes(id) ? prev.filter((companyId) => companyId !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommunicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Communication Data Submitted:", communicationData, selectedCompanies);
    setSelectedCompanies([]);
    setModalOpen(false);
    setCommunicationData({ type: "", date: "", notes: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Communication Action</h2>
      <div className="mb-4">
        <h3 className="text-xl font-medium">Select Companies</h3>
        {companies.map((company) => (
          <div key={company.id} className="flex items-center space-x-2 my-2">
            <input
              type="checkbox"
              id={`company-${company.id}`}
              checked={selectedCompanies.includes(company.id)}
              onChange={() => handleCheckboxChange(company.id)}
            />
            <label htmlFor={`company-${company.id}`} className="text-lg">
              {company.name}
            </label>
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Communication Performed
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <h2 className="text-xl mb-4">Log Communication</h2>
            <label className="block mb-2">Type:</label>
            <select className="border w-full mb-4 p-2">
              <option>LinkedIn Post</option>
              <option>Email</option>
            </select>
            <label className="block mb-2">Date:</label>
            <input type="date" className="border w-full mb-4 p-2" />
            <label className="block mb-2">Notes:</label>
            <textarea className="border w-full p-2 mb-4" rows="4"></textarea>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mr-3 "
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded "
              onClick={() => setModalOpen(false)}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <h3 className="text-xl font-medium mt-6">Completed Communications</h3>
      <div className="mt-2">
        <div
          className="bg-gray-100 p-4 rounded shadow-lg"
          data-tooltip-id="tooltip"
          data-tooltip-content="Notes: Follow-up email sent"
        >
          LinkedIn Post - 25th December
        </div>
        <Tooltip id="tooltip" />
      </div>
    </div>
  );
};

export default CommunicationAction;

