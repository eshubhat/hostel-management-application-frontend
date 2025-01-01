import React, { useState } from "react";
import axios from "axios";

const MessScheduleFeedback = () => {
  const [feedback, setFeedback] = useState({
    foodQuality: "",
    cleanliness: "",
    suggestions: "",
  });

 
  const apiurl = import.meta.env.URL; 

  const messSchedule = [
    { day: "Monday", meal: "Breakfast", menu: "Rice, Dal, Vegetable Curry, Chapati", timing: "7:30 AM - 9:30 AM" },
    { day: "Monday", meal: "Lunch", menu: "Pasta, Salad, Bread", timing: "11:45 AM - 2:30 PM" },
    { day: "Monday", meal: "Snacks", menu: "Fried Rice, Manchurian, Soup", timing: "5:00 PM - 6:30 PM" },
    { day: "Monday", meal: "Dinner", menu: "Biryani, Raita, Salad", timing: "7:30 PM - 9:30 PM" },
    // Add more meals as needed...
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  
      const response = await axios.post(`${apiurl}/feedback`, feedback);

      if (response.status === 200) {
        console.log("Feedback submitted successfully:", response.data);
        setFeedback({
          foodQuality: "",
          cleanliness: "",
          suggestions: "",
        });
        alert("Feedback submitted successfully!");
      } else {
        console.log("Failed to submit feedback:", response);
        alert("There was an issue submitting your feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error submitting feedback. Please try again.");
    }
  };

  return (
    <div>
      {/* Mess Schedule Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#cdd0d7] mb-4">Mess Schedule</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border-b py-2 px-4 text-left">Day</th>
              <th className="border-b py-2 px-4 text-left">Meal</th>
              <th className="border-b py-2 px-4 text-left">Menu</th>
              <th className="border-b py-2 px-4 text-left">Timings</th>
            </tr>
          </thead>
          <tbody>
            {messSchedule.map((schedule, index) => (
              <tr key={index}>
                <td className="border-b py-2 px-4">{schedule.day}</td>
                <td className="border-b py-2 px-4">{schedule.meal}</td>
                <td className="border-b py-2 px-4">{schedule.menu}</td>
                <td className="border-b py-2 px-4">{schedule.timing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
      
      <h1 className="text-2xl font-semibold text-[#172554] text-center mb-6">
        Mess Schedule & Feedback
      </h1>

      

      {/* Feedback Form */}
      <div>
        <h2 className="text-xl font-semibold text-[#172554] mb-4">Food Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Food Quality</label>
            <select
              name="foodQuality"
              value={feedback.foodQuality}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Quality</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Cleanliness</label>
            <select
              name="cleanliness"
              value={feedback.cleanliness}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Cleanliness</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Suggestions</label>
            <textarea
              name="suggestions"
              value={feedback.suggestions}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Provide any suggestions for improvement"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>


    </div>
    
  );
};

export default MessScheduleFeedback;
