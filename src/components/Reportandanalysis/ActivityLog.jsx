import React, { useState } from "react";

const ActivityLog = () => {
  const [activities, setActivities] = useState([
    { id: 1, user: "John Doe", company: "Company A", date: "2025-01-01", activity: "Email Sent" },
    { id: 2, user: "Jane Smith", company: "Company B", date: "2025-01-02", activity: "LinkedIn Message" },
    { id: 3, user: "John Doe", company: "Company C", date: "2025-01-03", activity: "Phone Call" },
  ]);

  const [newActivity, setNewActivity] = useState({
    user: "",
    company: "",
    date: "",
    activity: "",
  });

  const [sortKey, setSortKey] = useState("date");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const addActivity = () => {
    setActivities([
      ...activities,
      { ...newActivity, id: activities.length + 1 },
    ]);
    setNewActivity({ user: "", company: "", date: "", activity: "" });
  };

  const sortActivities = (key) => {
    setSortKey(key);
    setActivities([...activities].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center">Real-Time Activity Log</h2>

      {/* Add Activity */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Add New Activity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="user"
            value={newActivity.user}
            onChange={handleInputChange}
            placeholder="User"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="company"
            value={newActivity.company}
            onChange={handleInputChange}
            placeholder="Company"
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="date"
            value={newActivity.date}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="activity"
            value={newActivity.activity}
            onChange={handleInputChange}
            placeholder="Activity"
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={addActivity}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Add Activity
        </button>
      </div>

      {/* Sort Options */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => sortActivities("date")}
          className={`px-4 py-2 rounded ${
            sortKey === "date" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Date
        </button>
        <button
          onClick={() => sortActivities("user")}
          className={`px-4 py-2 rounded ${
            sortKey === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by User
        </button>
        <button
          onClick={() => sortActivities("company")}
          className={`px-4 py-2 rounded ${
            sortKey === "company" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Company
        </button>
      </div>

      {/* Activity Log */}
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">Activity Log</h3>
        <div className="grid grid-cols-4 gap-4 font-bold mb-2">
          <span>User</span>
          <span>Company</span>
          <span>Date</span>
          <span>Activity</span>
        </div>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="grid grid-cols-4 gap-4 p-2 border-b hover:bg-gray-50"
          >
            <span>{activity.user}</span>
            <span>{activity.company}</span>
            <span>{activity.date}</span>
            <span>{activity.activity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
