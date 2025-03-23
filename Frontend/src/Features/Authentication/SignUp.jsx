import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/Constant";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

export const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/SignIn");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900">Registration form</h2>
        <p className="text-gray-600 mb-6">Register to apply for jobs worldwide</p>

        <form onSubmit={submitHandler} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full name*</label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Enter your full name"
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email ID*</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email ID"
            className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <p className="text-sm text-gray-500">Job notifications will be sent to this email ID</p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password*</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="(Minimum 6 characters)"
           className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <p className="text-sm text-gray-500">Remember your password</p>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-medium">Mobile number*</label>
            <input
              type="text"
              name="phone"
              value={input.phone}
              onChange={changeEventHandler}
              placeholder="Enter your mobile number"
                className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <p className="text-sm text-gray-500">Recruiters will contact you on this number</p>
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

          {/* Profile Upload */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          

          

          {/* Register Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
          >
            Register now
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="mx-2 text-gray-500">or signup with</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Social Signup Buttons */}
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

          {/* Login Link */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/SignIn" className="text-purple-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
