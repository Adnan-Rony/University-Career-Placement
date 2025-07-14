import React from 'react';


const JobOverviewSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="h-6 skeleton w-40 mb-4" />
      <div className="space-y-3">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="h-5 skeleton w-5 rounded-full" />
            <div className="h-4 skeleton w-48" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOverviewSkeleton;
