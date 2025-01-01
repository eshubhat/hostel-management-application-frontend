import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Hostel Management</div>
        <div className="space-x-4">
          <Link to="/home" className="hover:text-gray-400">Home</Link>
          <Link to="/maintenance-requests" className="hover:text-gray-400">Maintenance Requests</Link>
          <Link to="/mess-schedule-feedback" className="hover:text-gray-400">Mess Schedule and Feedback</Link>
          <Link to="/contacts" className="hover:text-gray-400">Contacts</Link>
          <Link to="/request-room-change" className="hover:text-gray-400">Request Room Change</Link>
          <Link to="/rules-and-regulations" className="hover:text-gray-400">Rules and Regulations</Link>
        </div>
      </div>
    </nav>
  );
};

export default Home;

