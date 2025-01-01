import React, { useState } from "react";

const RequestRoomChange = () => {
  const [formData, setFormData] = useState({
    currentRoom: "",
    requestedRoom: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or API for processing
    console.log("Room Change Request Submitted:", formData);
    // Reset form after submission
    setFormData({
      currentRoom: "",
      requestedRoom: "",
      reason: "",
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#dadce2]">Request Room Change</h1>
      <p className="text-lg mt-4">Fill in the details below to request a room change.</p>

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
