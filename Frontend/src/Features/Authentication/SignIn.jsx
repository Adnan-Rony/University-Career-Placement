import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import img from "../../assets/fb748fb1d5f7e2ac1eefdb618a0df004.png";
import { USER_API_END_POINT } from "../../utils/Constant";
import { GoogleSignIN } from "./GoogleSignIN";

export const SignIn = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("Login Input:", input); // Debugging

    // Validate fields before submitting
    if (!input.email || !input.password || !input.role) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log("Response Data:", res.data); // Debugging

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      {/* Site title */}
         <title>Job Portal | SignIn</title>
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl flex flex-col md:flex-row items-center">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl font-semibold">Login to your Account</h2>
          <p className="text-gray-600 mb-4 pt-2">Welcome back! Select the below login methods.</p>

          <form onSubmit={submitHandler} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium">Email ID / Username</label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Enter email id / username"
                className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                
                value={input.password}
                onChange={changeEventHandler}
                placeholder="Enter password"
                className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            {/* Role Selection */}
            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-medium">Role:</label>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  required
                />
                <label>Student</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  required
                />
                <label>Recruiter</label>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-purple-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
            >
              Login
            </button>

            {/* OR Divider */}
            <div className="flex items-center justify-center my-4">
              <hr className="w-full border-gray-300" />
              <span className="mx-2 text-gray-500">or login with</span>
              <hr className="w-full border-gray-300" />
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4">
              {/* <button className="p-3 shadow-2xl rounded-lg hover:bg-gray-100 transition-all">
                <FaGoogle className="text-red-500" size={20} />
              </button> */}
              <GoogleSignIN></GoogleSignIN>
              <button className="p-3 shadow-2xl rounded-lg hover:bg-gray-100 transition-all">
                <FaFacebook className="text-blue-600" size={20} />
              </button>
              <button className="p-3 shadow-2xl rounded-lg hover:bg-gray-100 transition-all">
                <FaLinkedin className="text-blue-700" size={20} />
              </button>
            </div>
          </form>

          {/* Register Link */}
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/SignUp" className="text-purple-600 hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block w-1/2">
          <img src={img} alt="Login Illustration" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
