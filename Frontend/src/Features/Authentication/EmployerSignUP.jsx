import { useState } from "react";
import Confetti from "react-confetti";
import { Stepper } from "react-form-stepper";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { UseRegister } from "../../hooks/useAuth";
import CreateCompany from "../../Pages/Empoloyer/CreateCompany";

const EmployerSignUP = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "employer",
    },
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [registeredUser, setRegisteredUser] = useState(null); // save user data after step 1

  const { mutate: registerUser, isPending } = UseRegister();

  const handleNext = (data) => {
    registerUser(data, {
      onSuccess: (res) => {
        setRegisteredUser(res);
        setActiveStep(1);
        toast.success("Account registered!");
        reset();
      },
      onError: (err) => {
        toast.error("Registration failed: " + err?.message || "Unknown error");
      },
    });
  };

  const handleDone = () => {
    toast.success("Company created successfully!");
    navigate("/dashboard/employerDashboard");
  };

  return (
    <div className="min-h-screen px-4 py-6 text-">
      <Stepper
        steps={[
          { label: "Register Account" },
          { label: "Create Company" },
          { label: "Done" },
        ]}
        activeStep={activeStep}
        styleConfig={{
          activeBgColor: "#7e22ce", // Tailwind purple-700
          completedBgColor: "#7e22ce", // Same for completed steps
          inactiveBgColor: "#e5e7eb", // Tailwind gray-200
          activeTextColor: "#ffffff",
          completedTextColor: "#ffffff",
          inactiveTextColor: "#6b7280", // Tailwind gray-500
          size: "2em",
          circleFontSize: "1em",
          labelFontSize: "0.85em",
          fontWeight: 500,
        }}
        className="max-w-2xl mx-auto"
      />

      <div className="">
        <div className="max-w-md mx-auto mt-6">
          {activeStep === 0 && (
            <form onSubmit={handleSubmit(handleNext)} className="space-y-5">
              {/* role add and input hidden */}
              <div>
                <input type="hidden" {...register("role")} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  {...register("name")}
                  type="text"
                  required
                  placeholder="Your username"
                  className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: {
                      hasUpperCase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Must include an uppercase letter",
                      hasLowerCase: (value) =>
                        /[a-z]/.test(value) ||
                        "Must include a lowercase letter",
                      hasNumber: (value) =>
                        /\d/.test(value) || "Must include a number",
                      hasSpecialChar: (value) =>
                        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                        "Must include a special character",
                    },
                  })}
                  required
                  placeholder="••••••••"
                  className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[40px] cursor-pointer text-gray-500"
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </span>
                {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-2 px-4 bg-purple-700 text-white font-semibold rounded-md  transition disabled:opacity-50"
              >
                {isPending ? "Registering..." : "Next Step"}
              </button>
            </form>
          )}
        </div>

        {/* Step 2 - Create Company */}
        {activeStep === 1 && (
          <div className="mt-4">
            <CreateCompany
              onCompanyCreated={() => setActiveStep(2)}
              registeredUser={registeredUser}
            />
          </div>
        )}

        {/* Step 3 - Success */}
        {activeStep === 2 && (
          <div className="text-center mt-10 relative">
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={500}
            />
            <h2 className="text-xl font-semibold text-green-700">
              🎉 Registration Complete!
            </h2>
            <p className="mt-2 text-gray-600">Welcome to the Job Portal.</p>
            <button
              onClick={handleDone}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerSignUP;
