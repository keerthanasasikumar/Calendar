// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip as ReactTooltip } from "react-tooltip";

// const CalendarView = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // Sample communication data
//   const communications = [
//     {
//       date: "2024-12-20",
//       type: "LinkedIn Post",
//       notes: "Posted about company updates on LinkedIn.",
//     },
//     {
//       date: "2024-12-22",
//       type: "Email",
//       notes: "Followed up with an email regarding project deadlines.",
//     },
//     {
//       date: "2024-12-25",
//       type: "Phone Call",
//       notes: "Discussed partnership opportunities over a call.",
//     },
//   ];

//   const getTileContent = ({ date }) => {
//     const communication = communications.find(
//       (comm) => comm.date === date.toISOString().split("T")[0]
//     );

//     return (
//       communication && (
//         <div
//           id={`tooltip-${communication.date}`}
//           className="text-blue-600 font-semibold"
//         >
//           {communication.type}
//           <ReactTooltip
//             anchorId={`tooltip-${communication.date}`}
//             content={communication.notes}
//             place="top"
//             style={{
//               backgroundColor: "#1e40af",
//               color: "#fff",
//               borderRadius: "6px",
//               padding: "10px",
//             }}
//           />
//         </div>
//       )
//     );
//   };

//   return (
//     <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-3xl font-bold text-black mb-6 text-center">
//           Calendar View
//         </h2>
//         <div className="mb-6">
//           <Calendar
//             onChange={setSelectedDate}
//             value={selectedDate}
//             tileContent={getTileContent}
//             className="border rounded-lg shadow-sm p-4"
//           />
//         </div>
//         <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
//           <h3 className="text-xl font-semibold mb-4">
//             Selected Date: {selectedDate.toDateString()}
//           </h3>
//           <ul className="space-y-3">
//             {communications
//               .filter(
//                 (comm) =>
//                   new Date(comm.date).toDateString() ===
//                   selectedDate.toDateString()
//               )
//               .map((comm, index) => (
//                 <li
//                   key={index}
//                   className="bg-blue-50 p-3 rounded-lg shadow-lg w-full hover:bg-blue-100"
//                 >
//                   <strong>{comm.type}:</strong> {comm.notes}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalendarView;

import React, { useState } from "react";
import "./CalendarViews.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample data for communications
  const communications = [
    {
      date: "2024-12-20",
      type: "LinkedIn Post",
      notes: "Posted about company updates on LinkedIn.",
    },
    {
      date: "2024-12-22",
      type: "Email",
      notes: "Followed up with an email regarding project deadlines.",
    },
    {
      date: "2024-12-25",
      type: "Phone Call",
      notes: "Discussed partnership opportunities over a call.",
    },
    {
      date: "2024-12-30",
      type: "LinkedIn Message",
      notes: "Sent a LinkedIn message to schedule a meeting.",
    },
  ];

  const getTileContent = ({ date }) => {
    const communication = communications.find(
      (comm) => comm.date === date.toISOString().split("T")[0]
    );

    return (
      communication && (
        <div
          id={`tooltip-${communication.date}`}
          className="text-blue-500 font-medium"
        >
          {communication.type}
          <ReactTooltip
            anchorId={`tooltip-${communication.date}`}
            content={communication.notes}
            place="top"
          />
        </div>
      )
    );
  };

  return (
    <div className="p-6 bg-white  shadow-lg w-9/12 rounded-lg ml-20">
      <h2 className="text-xl font-bold mb-4">
        Calendar View
      </h2>
      <div className="relative">
        <Calendar
          className="ml-3 rounded-lg bg-white shadow w-full"
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={getTileContent}
          tileClassName={({ date, view }) => {
            const communication = communications.find(
              (comm) => comm.date === date.toISOString().split("T")[0]
            );
            return communication ? "bg-blue-100" : "";
          }}
        />
        {/* Display selected date's communications */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-center">
            Communications on {selectedDate.toDateString()}
          </h3>
          <ul className="space-y-2 mt-4">
            {communications
              .filter(
                (comm) =>
                  new Date(comm.date).toDateString() === selectedDate.toDateString()
              )
              .map((comm, index) => (
                <li key={index} className="border p-4 rounded-md bg-gray-50 shadow-sm">
                  <strong className="block text-lg text-gray-800">{comm.type}</strong>
                  <p className="text-sm text-gray-600">{comm.notes}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
