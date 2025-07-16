import React from "react";

const CompanyCardSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white p-5 rounded-lg shadow animate-pulse space-y-3 border border-gray-100"
        >
          {/* Logo & Name */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gray-200 rounded" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
          </div>

          {/* Industry */}
          <div className="w-24 h-4 bg-gray-200 rounded-full" />

          {/* Description */}
          <div className="space-y-1">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
            <div className="h-3 bg-gray-200 rounded w-2/3" />
          </div>

          {/* Badges & Trusted */}
          <div className="flex items-center justify-between mt-2">
            <div className="h-3 w-20 bg-gray-200 rounded" />
            <div className="h-4 w-16 bg-gray-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyCardSkeleton;
