import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Link to="/maintenance-requests" className="text-white hover:text-blue-300">Maintenance Requests</Link>
          </li>
          <li>
            <Link to="/mess-schedule-feedback" className="text-white hover:text-blue-300">Mess Schedule & Feedback</Link>
          </li>
          <li>
            <Link to="/contacts" className="text-white hover:text-blue-300">Contacts</Link>
          </li>
          <li>
            <Link to="/request-room-change" className="text-white hover:text-blue-300">Request Room Change</Link>
          </li>
          <li>
            <Link to="/rules-and-regulations" className="text-white hover:text-blue-300">Rules & Regulations</Link>
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

export default Navbar;
