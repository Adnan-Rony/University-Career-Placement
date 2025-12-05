import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { UseLoginUser } from "../../hooks/useAuth.js";
import { useState } from "react";
import toast from "react-hot-toast";
import { GoogleSignIN } from "./GoogleSignIN.jsx";
import { OauthGoogleSignin } from "./OauthGoogleSignin.jsx";

export const SignIn = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { mutate: loginUser, isPending } = UseLoginUser();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Default credential handler
  const fillCredentials = (role) => {
    switch (role) {
      case "user":
        setValue("email", "tamjidrazin09@gmail.com");
        setValue("password", "Tamjid@2025");
        break;
      case "employee":
        setValue("email", "employer@gmail.com");
        setValue("password", "Adnan@1999");
        break;
      case "admin":
        setValue("email", "razinahmed@gmail.com");
        setValue("password", "Admin@2025");
        break;
      default:
        break;
    }
  };
  const onSubmit = (data) => {
    console.log(data);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-white to-purple-100 px-4 sm:px-6 lg:px-8">
      <title>Job Portal | SignIn</title>

      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-lg ring-1 ring-gray-200 shadow-purple-600 ">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Login to your Account
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Welcome back! Please enter your credentials.
        </p>
        {/* 🔹 Quick Login Buttons */}
        <div className="flex justify-center gap-3 mb-5">
          <button
            type="button"
            onClick={() => fillCredentials("user")}
            className="px-3 py-1 text-sm bg-purple-100 hover:bg-purple-200 rounded-lg text-purple-700 font-medium"
          >
            User
          </button>
          <button
            type="button"
            onClick={() => fillCredentials("employee")}
            className="px-3 py-1 text-sm bg-purple-100 hover:bg-purple-200 rounded-lg text-purple-700 font-medium"
          >
            Employee
          </button>
          <button
            type="button"
            onClick={() => fillCredentials("admin")}
            className="px-3 py-1 text-sm bg-purple-100 hover:bg-purple-200 rounded-lg text-purple-700 font-medium"
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[42px] cursor-pointer text-gray-500"
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-5">
          <GoogleSignIN />
        
        </div>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/SignUp"
            className="text-purple-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
