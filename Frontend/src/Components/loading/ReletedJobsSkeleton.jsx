import React from 'react';

const ReletedJobsSkeleton = () => {
    return (
        <div>
            <div className="space-y-4">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition w-full space-y-4"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="skeleton w-14 h-14 rounded-md" />
              <div className="space-y-2">
                <div className="skeleton h-4 w-40 rounded" />
              </div>
            </div>
            <div className="skeleton w-6 h-6 rounded" />
          </div>

          {/* Tags/Info */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <div className="skeleton h-6 w-24 rounded-full" />
            <div className="skeleton h-6 w-40 rounded-full" />
            <div className="skeleton h-6 w-36 rounded-full" />
            <div className="skeleton h-6 w-32 rounded-full" />
          </div>

          {/* Deadline */}
          <div className="pt-2">
            <div className="skeleton h-4 w-48 rounded" />
          </div>

          <hr className="text-gray-200 my-4" />

          {/* Action Button */}
          <div className="flex items-center justify-between">
            <div className="skeleton h-10 w-32 rounded-lg" />
            <div></div>
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default ReletedJobsSkeleton;