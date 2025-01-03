import React, { useState } from "react";

const Notification = () => {
  // Example data for notifications
  const [overdueCommunications, setOverdueCommunications] = useState([
    { company: "Company A", date: "2024-12-20", notes: "Missed follow-up email." },
    { company: "Company B", date: "2024-12-21", notes: "Pending phone call." },
  ]);

  const [todaysCommunications, setTodaysCommunications] = useState([
    { company: "Company C", date: "2024-12-26", notes: "LinkedIn post scheduled." },
    { company: "Company D", date: "2024-12-26", notes: "Meeting at 2 PM." },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>

      {/* Overdue Communications */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Overdue Communications</h3>
        <div className="grid gap-4">
          {overdueCommunications.length > 0 ? (
            overdueCommunications.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-red-100 rounded shadow hover:bg-red-200"
                title={item.notes} // Tooltip
              >
                <p className="font-medium">{item.company}</p>
                <p className="text-sm">Overdue since: {item.date}</p>
              </div>
            ))
          ) : (
            <p>No overdue communications.</p>
          )}
        </div>
      </div>

      {/* Today's Communications */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Today's Communications</h3>
        <div className="grid gap-4">
          {todaysCommunications.length > 0 ? (
            todaysCommunications.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-yellow-100 rounded shadow hover:bg-yellow-200"
                title={item.notes} // Tooltip
              >
                <p className="font-medium">{item.company}</p>
                <p className="text-sm">Scheduled for: {item.date}</p>
              </div>
            ))
          ) : (
            <p>No communications due today.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
