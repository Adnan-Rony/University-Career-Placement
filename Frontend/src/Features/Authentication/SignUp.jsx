import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UseRegister } from "../../hooks/useAuth.js";
// import { GoogleSignIN } from "./GoogleSignIN"; // Optional

export const SignUp = () => {
  const { register, handleSubmit, reset,formState: { errors }, } = useForm();
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
        const message =
          err?.response?.data?.message || err?.message || "Unknown error";
        toast.error(message);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <title>Job Portal | Sign Up</title>

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Create an Account</h2>
        <p className="text-gray-600 text-center mt-2 mb-6">
          Register to apply for jobs worldwide
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
             {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
              {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: {
                  hasUpperCase: (value) =>
                    /[A-Z]/.test(value) || "Must include an uppercase letter",
                  hasLowerCase: (value) =>
                    /[a-z]/.test(value) || "Must include a lowercase letter",
                  hasNumber: (value) =>
                    /\d/.test(value) || "Must include a number",
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                    "Must include a special character",
                },
              })}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[42px] cursor-pointer text-gray-500"
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Role Selection (Optional — uncomment if needed) */}
          {/*
          <div className="flex items-center gap-4">
            <label className="text-gray-700 font-medium">Role:</label>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                {...register("role", { required: true })}
                value="job-seeker"
                className="cursor-pointer"
              />
              <label>Job Seeker</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                {...register("role", { required: true })}
                value="employer"
                className="cursor-pointer"
              />
              <label>Employer</label>
            </div>
          </div>
          */}

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50"
          >
            {isPending ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Optional: Social login or extra options */}
        {/*
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Or register with:</p>
          <div className="flex justify-center gap-4">
            <FaGoogle className="text-xl text-red-500 cursor-pointer" />
            <FaFacebook className="text-xl text-blue-600 cursor-pointer" />
            <FaLinkedin className="text-xl text-blue-700 cursor-pointer" />
          </div>
        </div>
        */}

        {/* Already have an account? */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/SignIn"
            className="text-purple-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
