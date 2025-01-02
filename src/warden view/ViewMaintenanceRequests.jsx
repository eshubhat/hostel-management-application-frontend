import React, { useState, useEffect } from "react";

const ViewMaintenanceRequests = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch issues from the backend
    const apiurl=import.meta.env.URL;
    fetch("${apiurl}/warden/view-issues")
      .then((response) => response.json())
      .then((data) => setIssues(data))
      .catch((error) => console.error("Error fetching issues:", error));
  }, []);

  return (
    <div>
      <h2>Maintenance Requests</h2>
      <ul>
        {issues.map((issue, index) => (
          <li key={index}>
            <p><strong>Student:</strong> {issue.student.name}</p>
            <p><strong>Room:</strong> {issue.student.roomNumber || "N/A"}</p>
            <p><strong>Tag:</strong> {issue.tag}</p>
            <p><strong>Description:</strong> {issue.description}</p>
            <p><strong>Status:</strong> {issue.status}</p>
            <p><strong>Status:</strong> {issue.floorNumber}</p>
            <p><strong>Created At:</strong> {new Date(issue.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewMaintenanceRequestss;
