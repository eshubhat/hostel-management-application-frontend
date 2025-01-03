import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SuperAdminNavbar = () => {
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
            <Link
              to="/superadmin/college-registration"
              className="text-white hover:text-blue-300"
            >
              Create College
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-blue-300"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SuperAdminNavbar;
