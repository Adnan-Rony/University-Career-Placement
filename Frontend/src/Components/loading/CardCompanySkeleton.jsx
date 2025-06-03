import React from "react";

const CardCompanySkeleton = () => {
  return (
    <div className="container mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-xl shadow-sm overflow-hidden bg-white animate-pulse"
          aria-label="Loading company card"
        >
          {/* Banner Skeleton */}
          <div className="relative skeleton bg-gray-200 lg:h-[195px] h-40 w-full" />

          {/* Info Skeleton */}
          <div className="p-4 space-y-4">
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-10  skeleton h-10 bg-gray-300 rounded-full" />
              <div className="h-4 skeleton w-3/4 bg-gray-300 rounded" />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <div className="w-4 skeleton h-4 bg-gray-300 rounded-full" />
              <div className="w-1/2 skeleton h-4 bg-gray-300 rounded" />
            </div>

            {/* Bottom Row: Tags and Button */}
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <div className="w-4 skeleton h-4 bg-gray-300 rounded-full" />
                <div className="w-20 skeleton h-4 bg-gray-300 rounded" />
              </div>
              <div className="w-24 skeleton h-8 bg-gray-300 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCompanySkeleton;
