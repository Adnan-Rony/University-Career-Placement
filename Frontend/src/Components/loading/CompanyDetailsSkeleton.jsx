import React from "react";

const CompanyDetailsSkeleton = () => {
  return (
    <div className="bg-gray-50 min-h-screen container mx-auto animate-pulse">
      {/* Banner Skeleton */}
      <div className="relative h-72 sm:h-80 lg:h-[22rem] bg-gray-200">
        <div className="w-full h-full bg-gray-300" />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 sm:left-20 sm:translate-x-0">
          <div className="w-32 h-32 rounded-full bg-gray-300 border-4 border-white shadow-lg" />
        </div>
      </div>

      {/* Details Skeleton */}
      <div className="mt-24 max-w-6xl mx-auto px-4 py-10 bg-white rounded-lg shadow-sm space-y-8">
        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="h-5 w-40 bg-gray-300 rounded" />
            </div>
          ))}
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-28 bg-gray-300 rounded" />
              <div className="h-5 w-36 bg-gray-300 rounded" />
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="space-y-2">
          <div className="h-5 w-52 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 w-5/6 bg-gray-300 rounded" />
          <div className="h-4 w-3/4 bg-gray-300 rounded" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsSkeleton;
