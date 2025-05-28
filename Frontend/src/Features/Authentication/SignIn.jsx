import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import img from "../../assets/fb748fb1d5f7e2ac1eefdb618a0df004.png";
import { USER_API_END_POINT } from "../../utils/Constant";
import { GoogleSignIN } from "./GoogleSignIN";
import { useForm } from "react-hook-form";
import { UseLoginUser } from "../../hooks/useAuth.js";
import { useState } from "react";
import toast from "react-hot-toast";

export const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate: loginUser, isPending } = UseLoginUser();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    loginUser(data, {
      onSuccess: () => {
        reset();
        toast.success("Login successful!");
        navigate("/");
      },
      onError: (err) => {
        toast.error("Login failed: " + (err?.message || "Invalid credentials"));
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      {/* Site title */}
      <title>Job Portal | SignIn</title>
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl flex flex-col md:flex-row items-center">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl font-semibold">Login to your Account</h2>
          <p className="text-gray-600 mb-4 pt-2">
            Welcome back! Select the below login methods.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                required
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                required
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[40px] cursor-pointer text-gray-500"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>
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
