import React from "react";

const CardCompanySkeleton = ({ count = 6 }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 max-w-screen-xl mx-auto">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse border border-gray-200 p-5 rounded-md text-center shadow w-56 mx-auto"
        >
          <div className="w-16 h-16 mx-auto mb-3 bg-gray-300 rounded-full" />
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mb-4" />
          <div className="h-8 bg-gray-300 rounded w-24 mx-auto" />
        </div>
      ))}
    </div>
  );
};

export default CardCompanySkeleton;
