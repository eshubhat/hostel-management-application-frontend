import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.URL}/auth/login`, {
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
      console.error(error.response.data);
      setMessage("Login failed. Please check your credentials.");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.URL}/auth/forgot-password`,
        {
          email: emailForReset,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error sending password reset email. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#172554]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-[#172554] text-center mb-6">
          {isForgotPassword ? "Forgot Password" : "Login"}
        </h2>
        {message && <p className="text-red-500 text-center mb-4">{message}</p>}

        {!isForgotPassword ? (
          <form onSubmit={handleLogin}>
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
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
            <p className="text-center mt-4 text-sm text-[#172554]">
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsForgotPassword(true)}
              >
                Forgot password?
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              value={emailForReset}
              onChange={(e) => setEmailForReset(e.target.value)}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Send Reset Email
            </button>
            <p className="text-center mt-4 text-sm text-[#172554]">
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsForgotPassword(false)}
              >
                Back to login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
