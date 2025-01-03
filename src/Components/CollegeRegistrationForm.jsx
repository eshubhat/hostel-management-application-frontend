import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CollegeRegistrationForm = () => {
  const navigate = useNavigate();
  const [collegeName, setCollegeName] = useState("");
  const [representativeEmail, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("hello");
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/superadmin/create-college`,
        {
          collegeName,
          representativeEmail,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Registration successful!");
        navigate("/home");
      } else {
        setMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#172554]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-[#172554] text-center mb-6">
          Register College
        </h2>
        {message && (
          <p className="text-green-500 text-center mb-4">{message}</p>
        )}
        <form onSubmit={handleRegister}>
          {/* Student Name */}
          <input
            type="text"
            placeholder="College Name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="College Admin Email"
            value={representativeEmail}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollegeRegistrationForm;
