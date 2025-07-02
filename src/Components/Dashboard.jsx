import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      <div className="flex justify-around mb-6">
        <button
          onClick={() => navigate("/representative/register-student")}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Register Student
        </button>
        <button
          onClick={() => navigate("/representative/register-hostel")}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Create Hostel
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
