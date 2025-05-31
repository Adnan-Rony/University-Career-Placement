import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl border border-gray-100 animate-pulse  flex flex-col p-6 justify-between my-6">
      {/* Header: Title & Bookmark */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
          <div className="h-5 w-5 bg-gray-200 rounded-full" />
        </div>

        {/* Company Info */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 bg-gray-200 rounded-xl" />
          <div className="flex flex-col gap-2">
            <div className="h-3 w-32 bg-gray-200 rounded" />
            <div className="h-3 w-24 bg-gray-100 rounded" />
          </div>
        </div>

        {/* Job Type */}
        <div className="h-6 w-20 bg-gray-200 rounded-full mb-6" />
      </div>

      {/* Buttons (Bottom aligned) */}
      <div className="grid grid-cols-2 gap-3">
        <div className="h-10 bg-gray-200 rounded-lg"></div>
        <div className="h-10 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
