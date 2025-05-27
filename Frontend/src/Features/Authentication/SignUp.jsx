import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { GoogleSignIN } from "./GoogleSignIN";
import { useForm } from "react-hook-form";
import { UseRegister } from "../../hooks/useAuth.js";

export const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: registerUser, isPending } = UseRegister();

  const onSubmit = (data) => {
    registerUser(data, {
      onSuccess: () => {
        reset();
        toast.success("Registered successfully!");
        navigate("/");
      },
      onError: (err) => {
        toast.error("Registration failed: " + err?.message || "Unknown error");
      },
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900">Registration form</h2>
        <p className="text-gray-600 mb-6">
          Register to apply for jobs worldwide
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="name"
              {...register("name")}
              type="text"
              required
              placeholder="Your username"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
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

       <div className="flex items-center gap-4">
  <label className="text-gray-700 font-medium">Role:</label>

  <div className="flex items-center space-x-2">
    <input
      type="radio"
      {...register("role", { required: true })}
      value="job-seeker"
      className="cursor-pointer"
    />
    <label>job-seeker</label>
  </div>

  <div className="flex items-center space-x-2">
    <input
      type="radio"
      {...register("role", { required: true })}
      value="employer"
      className="cursor-pointer"
    />
    <label>employer</label>
  </div>
</div>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
          >
            {isPending ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
