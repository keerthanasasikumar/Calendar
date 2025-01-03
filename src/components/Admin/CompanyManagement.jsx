import React, { useState } from "react";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    linkedin: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    periodicity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCompany = () => {
    setCompanies([...companies, { ...formData, id: Date.now() }]);
    setFormData({
      name: "",
      location: "",
      linkedin: "",
      emails: "",
      phoneNumbers: "",
      comments: "",
      periodicity: "",
    });
  };

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Company Management</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="emails"
          placeholder="Emails (comma-separated)"
          value={formData.emails}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="phoneNumbers"
          placeholder="Phone Numbers (comma-separated)"
          value={formData.phoneNumbers}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="periodicity"
          placeholder="Communication Periodicity (e.g., every 2 weeks)"
          value={formData.periodicity}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={handleAddCompany}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Company
        </button>
      </div>
      <ul className="mt-6 space-y-3">
        {companies.map((company) => (
          <li
            key={company.id}
            className="p-4 border rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{company.name}</h3>
              <p>{company.location}</p>
              <p>{company.linkedin}</p>
              <p>{company.emails}</p>
              <p>{company.phoneNumbers}</p>
              <p>{company.comments}</p>
              <p>{company.periodicity}</p>
            </div>
            <button
              onClick={() => handleDeleteCompany(company.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;


