import React from "react";

const CardCompanySkeleton = () => {
  return (
    <div className="container mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-xl shadow-sm overflow-hidden bg-white animate-pulse"
        >
          {/* Banner Skeleton */}
          <div className="relative bg-gray-200 lg:h-[195px] h-40 w-full"></div>

          {/* Info Skeleton */}
          <div className="p-4 space-y-3">
            {/* Logo & Name */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
              <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="w-24 h-8 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCompanySkeleton;
