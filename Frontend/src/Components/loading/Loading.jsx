import React from "react";
import img from "../../assets/sitelogo (2).png";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center z-50 animate-fadeIn">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt="Company Logo"
          className="w-16 h-16 mb-5 animate-bounce-slow drop-shadow-lg"
        />
      </div>

      {/* Spinner */}
      <div className="relative w-12 h-12 mb-4">
        <div className="absolute inset-0 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-purple-200 border-t-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Text */}
      <p className="text-gray-700 text-sm tracking-wide mt-2 animate-pulse">
        Loading, please wait...
      </p>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;
