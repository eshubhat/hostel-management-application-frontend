import React, { useState } from "react";
import axios from "axios";

const RaiseIssueForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    roomNumber: "",
    floorNumber: "",
    tag: "",
    description: "",
  });
  const [userIssues, setUserIssues] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const apiUrl = import.meta.env.URL;
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchUserIssues = async () => {
      try {
        const response = await axios.get(`${apiUrl}/issues`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send the JWT in the Authorization header
          },
        });
        setUserIssues(response.data);
      } catch (error) {
        console.error("Error fetching user issues:", error);
      }
    };

    if (token) {
      fetchUserIssues();
    } else {
      console.log("No JWT found, user not authenticated");
    }
  }, [token, apiUrl]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.URL}/issues/create-issue`,
        formData
      );
      if (response.status === 200) {
        setSuccessMessage("Issue raised successfully!");
        setErrorMessage("");
        setFormData({
          name: "",
          roomNumber: "",
          floorNumber: "",
          tag: "",
          description: "",
        });
        const updatedResponse = await axios.get(`${apiUrl}/issues`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserIssues(updatedResponse.data);
      }
    } catch (error) {
      setErrorMessage("Failed to raise the issue. Please try again.");
      setSuccessMessage("");
    }
  };

  const handleResolved = async (issueId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/issues/${issueId}`,
        {
          status: "Resolved",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setSuccessMessage("Issue resolved successfully!");
        const updatedResponse = await axios.get(`${apiUrl}/issues`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserIssues(updatedResponse.data);
      }
    } catch (error) {
      setErrorMessage("Failed to mark as resolved. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#172554]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-[#172554] text-center mb-6">
          Raise Maintenance Issue
        </h1>
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Room Number</label>
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              min="1"
              max="390"
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Floor Number</label>
            <input
              type="number"
              name="floorNumber"
              value={formData.floorNumber}
              min="0"
              max="3"
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Tag</label>
            <select
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Issue Type</option>
              <option value="carpenter">Carpenter</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="cleaning">Cleaning</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RaiseIssueForm;
