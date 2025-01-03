import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateHostelForm = () => {
  const navigate = useNavigate();
  const [sharingTypes, setSharingTypes] = useState([
    { type: "single", value: "" },
    { type: "double", value: "" },
    { type: "triple", value: "" },
    { type: "bunker", value: "" },
  ]);
  const [hostelName, setHostelName] = useState("");
  const [hostelType, setHostelType] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState("");
  const [totalFloors, setTotalFloors] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [wardenEmail, setWardenEmail] = useState("");

  const handleChange = (index, newValue) => {
    const updatedSharingTypes = sharingTypes.map((item, i) =>
      i === index ? { ...item, value: newValue } : item
    );
    setSharingTypes(updatedSharingTypes);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const totalSharing = sharingTypes.reduce(
      (sum, item) => sum + (parseInt(item.value, 10) || 0),
      0
    );

    setNumberOfSeats(totalSharing.toString());

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/representative/registerHostel`,
        {
          hostelName,
          hostelType,
          sharingTypes,
          wardenEmail,
          totalFloors,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Hostel created successfully!");
        navigate("/home");
      } else {
        setMessage("Failed to create hostel. Please try again.");
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
          Register Hostel
        </h2>
        {message && (
          <p className="text-green-500 text-center mb-4">{message}</p>
        )}
        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Hostel Name"
            value={hostelName}
            onChange={(e) => setHostelName(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <div className="mb-4">
            <label className="block text-gray-700">Hostel Type</label>
            <select
              value={hostelType}
              onChange={(e) => setHostelType(e.target.value)}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            >
              <option value="">Select Type</option>
              <option value="female">Girls</option>
              <option value="male">Boys</option>
            </select>
          </div>

          <input
            type="number"
            placeholder="Total Floors"
            value={totalFloors}
            onChange={(e) => setTotalFloors(e.target.value)}
            required
            min="1"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          {/* <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-lg"
          >
            Submit
          </button> */}
          {sharingTypes.map((item, index) => (
            <div className="mb-4" key={item.type}>
              <label className="block text-gray-700 capitalize">
                {item.type} Sharing
              </label>
              <input
                type="number"
                value={item.value}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Enter number of ${item.type} rooms`}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                required
              />
            </div>
          ))}

          <input
            type="email"
            placeholder="Warden Email"
            value={wardenEmail}
            onChange={(e) => setWardenEmail(e.target.value)}
            required
            min="1"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHostelForm;
