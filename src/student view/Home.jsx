
import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import websiteImage from "./bg-pic.jpg"; // Example image path, make sure to replace it with your image

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar will be present on the Home page */}
      <Navbar />

      {/* Background image */}
      <div
        className="relative h-[50vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${websiteImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white text-center drop-shadow-md">
            Welcome to KLE Technological University's Official Hostel Management System
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-[#000000] bg-[#ffffff] p-8 md:p-12 lg:p-16">
        <p className="font-bold text-xl md:text-3xl mb-6">
          Ensuring a seamless and efficient hostel experience for our students.
        </p>

        <div className="mt-8 text-gray-700 text-2xl">
          <p className="mb-4">
            At KLE Technological University, we are committed to providing a vibrant and student-centric
            living environment. Our Hostel Management System is designed to ensure that every aspect of
            hostel life is well-organized and accessible.
          </p>
          <p className="mb-6">
            Our platform serves as the central hub for managing hostel-related services, offering the
            following features:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Quick and easy submission of maintenance requests for electrical, plumbing, or carpentry issues.</li>
            <li>Request for room allotments</li>
            <li>Access to important announcements, hostel rules, and regulations.</li>
            <li>Comprehensive mess schedule with weekly menu details.</li>
          </ul>
          <p className="mb-6">
          Through the Hostel Management System, we seek to develop a culture of efficiency, safety, and
            convenience, which will enable the students to concentrate on their academic and
            personal growth while enjoying a hassle-free hostel life.

          </p>
          <p className="font-bold text-2xl md:text-2xl">
          Transforming hostel life into a journey of comfort, convenience, and community at KLE Technological University.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

