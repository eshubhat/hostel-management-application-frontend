import React, { useState } from "react";
import axios from "axios";
const CreateHostelForm = () => {
  const [hostelName, setHostelName] = useState("");
  const [hostelType, setHostelType] = useState(""); 
  const [numberOfSeats, setNumberOfSeats] = useState(""); 
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true); 
    
    try {
        const response = await axios.post("/api/create-hostel", {
          hostelName,
          hostelType, 
          numberOfSeats,
        });
  
        if (response.status === 200) {
          setMessage("Hostel created successfully!");
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
          Create Hostel
        </h2>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
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
              <option value="Girls">Girls</option>
              <option value="Boys">Boys</option>
            </select>
          </div>

          <input
            type="number"
            placeholder="Number of Seats"
            value={numberOfSeats}
            onChange={(e) => setNumberOfSeats(e.target.value)}
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
