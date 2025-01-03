// import React, { useState } from "react";

// const UserDashboard = () => {
//   const [selectedCompanies, setSelectedCompanies] = useState([]);
//   const [communications, setCommunications] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Sample data for companies
//   const companies = [
//     { id: 1, name: "Company A", lastCommunications: ["LinkedIn Post - 5th September", "Email - 3rd September"], nextCommunication: "Phone Call - 10th September", overdue: true },
//     { id: 2, name: "Company B", lastCommunications: ["LinkedIn Post - 4th September", "Email - 1st September"], nextCommunication: "LinkedIn Message - 8th September", overdue: false },
//     // Add more companies as needed
//   ];

//   // Handle communication performed action
//   const handleCommunicationAction = (companyId) => {
//     setIsModalOpen(true);
//   };

//   // Handle adding a new communication
//   const addCommunication = (companyId, type, date, notes) => {
//     const newCommunication = { companyId, type, date, notes };
//     setCommunications([...communications, newCommunication]);
//     // Reset overdue highlight
//     setSelectedCompanies(selectedCompanies.filter((id) => id !== companyId));
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-gray-700 mb-4">User Dashboard</h2>

//       {/* Overdue and Due Communications */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold">Notifications</h3>
//         <div className="bg-red-100 p-4 rounded-lg mb-2">
//           <strong>Overdue Communications</strong>
//           <div className="mt-2">
//             {companies.filter((company) => company.overdue).map((company) => (
//               <div key={company.id} className="flex justify-between p-2 border-b">
//                 <span>{company.name}</span>
//                 <span className="text-red-600">Overdue</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded-lg">
//           <strong>Today's Communications</strong>
//           <div className="mt-2">
//             {companies.filter((company) => !company.overdue).map((company) => (
//               <div key={company.id} className="flex justify-between p-2 border-b">
//                 <span>{company.name}</span>
//                 <span className="text-yellow-600">Due Today</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Companies Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {companies.map((company) => (
//           <div
//             key={company.id}
//             className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
//           >
//             <h3 className="text-xl font-bold">{company.name}</h3>
//             <p className="mt-2">Last Communications:</p>
//             <ul className="list-disc pl-5">
//               {company.lastCommunications.map((comm, index) => (
//                 <li key={index} className="text-gray-600">{comm}</li>
//               ))}
//             </ul>
//             <p className="mt-2">Next Scheduled: {company.nextCommunication}</p>
//             <button
//               onClick={() => handleCommunicationAction(company.id)}
//               className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//             >
//               Communication Performed
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Communication Action */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-lg font-semibold">Log New Communication</h3>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 addCommunication(
//                   selectedCompanies[0],
//                   e.target.communicationType.value,
//                   e.target.communicationDate.value,
//                   e.target.communicationNotes.value
//                 );
//               }}
//             >
//               <div className="mt-4">
//                 <label className="block">Type of Communication</label>
//                 <select name="communicationType" className="w-full border p-2 mt-1">
//                   <option>LinkedIn Post</option>
//                   <option>Email</option>
//                   <option>Phone Call</option>
//                 </select>
//               </div>
//               <div className="mt-4">
//                 <label className="block">Date of Communication</label>
//                 <input
//                   type="date"
//                   name="communicationDate"
//                   className="w-full border p-2 mt-1"
//                   required
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="block">Add Notes</label>
//                 <textarea
//                   name="communicationNotes"
//                   className="w-full border p-2 mt-1"
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//               <div className="mt-6 flex justify-end">
                // <button
                //   type="button"
                //   onClick={() => setIsModalOpen(false)}
                //   className="mr-4 py-2 px-4 bg-gray-500 text-white rounded-lg"
                // >
                //   Cancel
                // </button>
//                 <button
//                   type="submit"
//                   className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;

// Dashboard.jsx
import React, { useState } from "react";
import { Tooltip } from "react-tooltip"; // Optional tooltip library

const UserDashboard = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Company A",
      lastCommunications: [
        { type: "LinkedIn Post", date: "2024-12-20", notes: "Great post engagement." },
        { type: "Email", date: "2024-12-18", notes: "Follow-up email sent." },
        { type: "Phone Call", date: "2024-12-15", notes: "Discussed project details." },
        { type: "LinkedIn Message", date: "2024-12-10", notes: "Connection request sent." },
        { type: "Other", date: "2024-12-08", notes: "Visited office." },
      ],
      nextCommunication: { type: "Email", date: "2024-12-26" },
      status: "overdue", // or "dueToday" or "none"
    },
    {
      id: 2,
      name: "Company B",
      lastCommunications: [
        { type: "Email", date: "2024-12-21", notes: "Followed up on proposal." },
        { type: "Phone Call", date: "2024-12-15", notes: "Scheduled next meeting." },
        { type: "LinkedIn Post", date: "2024-12-12", notes: "Shared company updates." },
        { type: "Other", date: "2024-12-05", notes: "Sent holiday greetings." },
        { type: "LinkedIn Message", date: "2024-12-01", notes: "Discussed job opportunities." },
      ],
      nextCommunication: { type: "Phone Call", date: "2024-12-26" },
      status: "dueToday", // or "overdue" or "none"
    },
  ]);

  const getRowHighlightClass = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-200";
      case "dueToday":
        return "bg-yellow-200";
      default:
        return "";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Last Five Communications</th>
              <th className="px-4 py-2">Next Scheduled Communication</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className={getRowHighlightClass(company.status)}>
                <td className="border px-4 py-2 font-medium">{company.name}</td>
                <td className="border px-4 py-2">
                  {company.lastCommunications.map((comm, index) => (
                    <div
                      key={index}
                      className="relative group hover:underline cursor-pointer"
                    >
                      <span>{`${comm.type} (${comm.date})`}</span>
                      <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded shadow-md">
                        {comm.notes}
                      </div>
                    </div>
                  ))}
                </td>
                <td className="border px-4 py-2">
                  {`${company.nextCommunication.type} (${company.nextCommunication.date})`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
