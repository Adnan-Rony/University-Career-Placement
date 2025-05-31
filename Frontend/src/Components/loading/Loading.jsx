import React from "react";
import img from "../../public/sitelogo (2).png";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <img
        src={img}
        alt="Company Logo"
        className="w-16 h-16 animate-pulse mb-4"
      />

      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="text-gray-600 text-sm mt-4">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
