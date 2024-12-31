import axios from "axios";
import React, { useState, useEffect } from "react";

const RegisterStudentForm = () => {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [hostelType, setHostelType] = useState(""); // For Hostel Type (Girls/Boys)
  const [selectedHostel, setSelectedHostel] = useState(""); // Selected Hostel
  const [roomType, setRoomType] = useState(""); // Room Type (2-sharing, 4-sharing, 6-sharing)
  const [message, setMessage] = useState("");
  const [hostels, setHostels] = useState([]); // Available hostels based on the type
  const [loading, setLoading] = useState(false); // Loading state for POST request

  // Example hostel data. In real-world cases, fetch this from a backend API.
  const availableHostels = {
    Girls: ["Girls Hostel 1", "Girls Hostel 2"],
    Boys: ["Boys Hostel 1", "Boys Hostel 2"],
  };

  useEffect(() => {
    // Dynamically update hostels when hostelType changes.
    setHostels(hostelType ? availableHostels[hostelType] : []);
    // Reset dependent fields when the previous input changes.
    setSelectedHostel("");
    setRoomType("");
  }, [hostelType]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const universityEmailPattern = /@university\.edu$/;
    if (!universityEmailPattern.test(email)) {
      setMessage("Please enter a valid university email.");
      setLoading(false);
      return;
    }

    try {
        const response = await axios.post("/api/register-student", {
            studentName,
            email,
            hostelType,
            selectedHostel,
            roomType,
          });
      
          if (response.status === 200) {
            setMessage("Registration successful!");
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
          Register Student
        </h2>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleRegister}>
          {/* Student Name */}
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="University Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          {/* Hostel Type */}
          <div className="mb-4">
            <label className="block text-gray-700">Hostel Type</label>
            <select
              value={hostelType}
              onChange={(e) => setHostelType(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select Hostel Type</option>
              <option value="Girls">Girls</option>
              <option value="Boys">Boys</option>
            </select>
          </div>

          {/* Hostel Selection */}
          <div className="mb-4">
            <label className="block text-gray-700">Select Hostel</label>
            <select
              value={selectedHostel}
              onChange={(e) => setSelectedHostel(e.target.value)}
              disabled={!hostelType}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select Hostel</option>
              {hostels.map((hostel) => (
                <option key={hostel} value={hostel}>
                  {hostel}
                </option>
              ))}
            </select>
          </div>

          {/* Room Type */}
          <div className="mb-4">
            <label className="block text-gray-700">Room Type</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              disabled={!selectedHostel}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select Room Type</option>
              <option value="2-sharing">2-sharing</option>
              <option value="4-sharing">4-sharing</option>
              <option value="6-sharing">6-sharing</option>
            </select>
          </div>

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

export default RegisterStudentForm;
