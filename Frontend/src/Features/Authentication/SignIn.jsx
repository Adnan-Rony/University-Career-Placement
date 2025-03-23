import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/Constant";
import axios from "axios";
import toast from "react-hot-toast";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import img from "../../assets/fb748fb1d5f7e2ac1eefdb618a0df004.png";

export const SignIn = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
  <div>
 
      <div className="grid lg:grid-cols-2 gap-4 items-center justify-center lg:max-w-7xl mx-auto lg:w-1/2 border border-gray-100 shadow-2xl rounded-3xl p-4 my-10">
      
      <form
        onSubmit={submitHandler}
        className=""
      >
       

        <div className="my-2">
          <input
            className="input w-full border p-2 rounded"
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="Enter your email email"
          />
        </div>

        <div className="my-2">
          <input
            className="input w-full border p-2 rounded"
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center gap-4 my-5">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="student"
              checked={input.role === "student"}
              onChange={changeEventHandler}
              className="cursor-pointer"
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
            />
            <label>Recruiter</label>
          </div>
        </div>
   

        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 px-6 ">
          <h2 className="text-3xl font-semibold ">Login to your Account</h2>
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
              />
              
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded" />
              <label className="ml-2 text-gray-700">Remember me</label>
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
              <button className="p-3 shadow-2xl rounded-lg hover:bg-gray-100 transition-all">
                <FaGoogle className="text-red-500" size={20} />
              </button>
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
