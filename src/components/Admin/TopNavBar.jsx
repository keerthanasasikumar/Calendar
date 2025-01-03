import React from "react";
import Layer2 from "../../assets/Layer2.png";
import Layer3 from "../../assets/Layer3.png";
import report from "../../assets/report.png";



const TopNavBar = ({onProfileClick}) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow">
      <h1 className="text-2xl font-bold text-gray-700">Calendar-Tracking</h1>
      <div className="flex space-x-3">
      <div
        className="text-white cursor-pointer flex items-center"
        onClick={() => onProfileClick("admin")}
      >
        <img
          src={Layer2}
          alt="Admin Profile"
          className="rounded-full w-14 h-12"
        />
        <span className="ml-2 text-black font-semibold">Admin Profile</span>
      </div>

      {/* User Profile */}
      <div
        className="text-white cursor-pointer flex items-center"
        onClick={() => onProfileClick("user")}
      >
        <img
          src={Layer3}
          alt="User Profile"
          className="rounded-full w-14 h-12"
        />
        <span className="ml-2 text-black font-semibold">User Profile</span>
        </div>
        <div
        className="text-white cursor-pointer flex items-center"
        onClick={() => onProfileClick("report")}
      >
        <img
          src={report}
          alt="Report Profile"
          className="rounded-full h-12 w-14"
        />
        <span className="ml-2 text-black font-semibold">Reporting</span>
        </div>
        </div>
    </div>
  );
};

export default TopNavBar;


