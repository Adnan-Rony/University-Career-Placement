import React from 'react';

const Skeleton = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const JobOverviewSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Skeleton className="h-6 w-40 mb-4" />
      <div className="space-y-3">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-48" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOverviewSkeleton;
