import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate(); // React Router hook to navigate to login page

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });
      const { token } = response.data;
      if (token) {
        localStorage.setItem("jwtToken", token); // Save the token only if it exists
        navigate("/home"); // Redirect to the home page
      } else {
        setError("No token received. Please try again.");
      }
    } catch (error) {
      setMessage("Error occurred while creating your account. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#172554]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-[#172554] text-center mb-6">Sign Up</h2>
        
        {message && <p className="text-red-500 text-center mb-4">{message}</p>}

        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-[#172554]">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer "
            onClick={() => navigate("/login")} 
          >
            Go to Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
