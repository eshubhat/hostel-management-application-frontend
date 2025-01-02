

import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const WardenNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
    };
  return (
    <nav className="bg-[#172554] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Hostel Management</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="text-white hover:text-blue-300">Home</Link>
          </li>
          <li>
            <Link to="/warden/maintenance-requests" className="text-white hover:text-blue-300">Maintenance Requests</Link>
          </li>
          <li>
            <Link to="/warden/mess-schedule-feedback" className="text-white hover:text-blue-300">Mess Feedback</Link>
          </li>
          <li>
            <Link to="/warden/room-change-requests" className="text-white hover:text-blue-300"> Room Change Requests</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="text-white hover:text-blue-300">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default WardenNavbar;
