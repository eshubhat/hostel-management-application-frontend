import React, { useState } from "react";
import axios from "axios";

const RequestRoomChange = () => {
  const [formData, setFormData] = useState({
    currentRoom: "",
    requestedRoom: "",
    reason: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("jwt"); // Get the JWT from local storage
  const apiUrl = import.meta.env.URL; // Replace with your actual API URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setErrorMessage("You must be logged in to request a room change.");
      return;
    }

    try {
      // Send the room change request to the backend with the JWT token
      const response = await axios.post(
        `${apiUrl}/room-change-requests`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT in the header
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Room change request submitted successfully!");
        setErrorMessage("");
        setFormData({
          currentRoom: "",
          requestedRoom: "",
          reason: "",
        });
      }
    } catch (error) {
      setErrorMessage("Failed to submit room change request. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#dadce2]">Request Room Change</h1>
      <p className="text-lg mt-4">Fill in the details below to request a room change.</p>

      {/* Display success or error messages */}
      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="currentRoom" className="block text-lg font-medium text-gray-700">
            Current Room Number
          </label>
          <input
            type="text"
            id="currentRoom"
            name="currentRoom"
            value={formData.currentRoom}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="requestedRoom" className="block text-lg font-medium text-gray-700">
            Requested Room Number
          </label>
          <input
            type="text"
            id="requestedRoom"
            name="requestedRoom"
            value={formData.requestedRoom}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-lg font-medium text-gray-700">
            Reason for Room Change
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestRoomChange;
