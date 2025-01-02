import React, { useState, useEffect } from "react";

const ViewMessFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch feedbacks from the backend
    const apiurl = import.meta.env.URL; // Ensure you have the correct URL set in your environment
    fetch(`${apiurl}/warden/mess-feedback`)
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Error fetching mess feedback:", error));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#172554] text-center mb-6">Mess Feedback</h2>
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="feedback-card bg-white shadow-lg rounded-lg p-6 mb-6 border-l-4 border-blue-500"
          >
            <div className="feedback-header flex justify-between items-center mb-4">
              <p className="text-xl font-semibold text-[#172554]">{feedback.student.name}</p>
              <p className="text-sm text-gray-500">{new Date(feedback.createdAt).toLocaleString()}</p>
            </div>
            <div className="feedback-body">
              <p className="text-gray-700 mb-2">
                <strong>Food Quality:</strong> {feedback.foodQuality}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Cleanliness:</strong> {feedback.cleanliness}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Suggestions:</strong> {feedback.suggestions || "No suggestions provided"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No feedback available at the moment.</p>
      )}
    </div>
  );
};

export default ViewMessFeedback;
