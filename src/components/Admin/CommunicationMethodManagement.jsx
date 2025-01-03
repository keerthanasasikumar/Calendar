// import React, { useState } from "react";

// const CommunicationMethodManagement = () => {
  // const defaultMethods = [
  //   { name: "LinkedIn Post", description: "Post on LinkedIn", mandatory: true },
  //   { name: "LinkedIn Message", description: "Send LinkedIn message", mandatory: true },
  //   { name: "Email", description: "Send an email", mandatory: true },
  //   { name: "Phone Call", description: "Make a phone call", mandatory: true },
  //   { name: "Other", description: "Other communication method", mandatory: false },
  // ];

  // const [methods, setMethods] = useState(defaultMethods);

  // const handleAddMethod = () => {
  //   setMethods([
  //     ...methods,
  //     { name: "New Method", description: "Description", mandatory: false },
  //   ]);
  // };

//   return (
//     <div className="bg-white p-6 shadow-md rounded-lg">
//       <h2 className="text-xl font-semibold mb-4">Communication Method Management</h2>
      // <button
      //   onClick={handleAddMethod}
      //   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
      // >
      //   Add Method
      // </button>
      // <ul className="space-y-3">
      //   {methods.map((method, index) => (
      //     <li
      //       key={index}
      //       className="p-4 border rounded flex justify-between items-center"
      //     >
      //       <div>
      //         <h3 className="font-bold">{method.name}</h3>
      //         <p>{method.description}</p>
      //         <p>Mandatory: {method.mandatory ? "Yes" : "No"}</p>
      //       </div>
      //     </li>
      //   ))}
      // </ul>
//     </div>
//   );
// };

// export default CommunicationMethodManagement;


// import React, { useState } from 'react';

// const CommunicationMethodManagement = () => {
//   const defaultMethods = [
//     { name: "LinkedIn Post", description: "Post on LinkedIn", mandatory: true },
//     { name: "LinkedIn Message", description: "Send LinkedIn message", mandatory: true },
//     { name: "Email", description: "Send an email", mandatory: true },
//     { name: "Phone Call", description: "Make a phone call", mandatory: true },
//     { name: "Other", description: "Other communication method", mandatory: false },
//   ];

//   const [methods, setMethods] = useState(defaultMethods);

//   const handleAddMethod = () => {
//     setMethods([
//       ...methods,
//       { name: "New Method", description: "Description", mandatory: false },
//     ]);
//   };

//   return (
//     <div className="p-6 bg-white shadow rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Communication Method Management</h2>
//       <button
//         onClick={handleAddMethod}
//         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
//       >
//         Add Method
//       </button>
//       <ul className="space-y-3">
//         {methods.map((method, index) => (
//           <li
//             key={index}
//             className="p-4 border rounded flex justify-between items-center"
//           >
//             <div>
//               <h3 className="font-bold">{method.name}</h3>
//               <p>{method.description}</p>
//               <p>Mandatory: {method.mandatory ? "Yes" : "No"}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CommunicationMethodManagement;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([]);
  const [newMethod, setNewMethod] = useState({
    name: '',
    description: '',
    mandatory: false,
  });

  // Fetch methods from the server
  useEffect(() => {
    axios.get('http://localhost:5000/methods').then((response) => {
      setMethods(response.data);
    });
  }, []);

  // Handle adding a new method
  const handleAddMethod = () => {
    axios
      .post('http://localhost:5000/methods', newMethod)
      .then((response) => {
        setMethods([...methods, response.data]);
        setNewMethod({ name: '', description: '', mandatory: false }); // Clear the input fields
      })
      .catch((error) => {
        console.error('Error adding method:', error);
      });
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Communication Method Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Method Name"
          value={newMethod.name}
          onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newMethod.description}
          onChange={(e) =>
            setNewMethod({ ...newMethod, description: e.target.value })
          }
          className="border p-2 rounded w-full mb-2"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={newMethod.mandatory}
            onChange={(e) =>
              setNewMethod({ ...newMethod, mandatory: e.target.checked })
            }
          />
          <span>Mandatory</span>
        </label>
        <button
          onClick={handleAddMethod}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
        >
          Add Method
        </button>
      </div>
      <ul className="space-y-3">
        {methods.map((method, index) => (
          <li
            key={index}
            className="p-4 border rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{method.name}</h3>
              <p>{method.description}</p>
              <p>Mandatory: {method.mandatory ? 'Yes' : 'No'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodManagement;
