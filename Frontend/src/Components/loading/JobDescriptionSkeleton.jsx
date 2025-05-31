import React from 'react';

const Skeleton = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const JobDescriptionSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Skeleton className="h-6 w-40 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-5 w-32 mb-3" />
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="flex items-start gap-2 mb-2">
          <Skeleton className="w-4 h-4 rounded-full mt-1" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
};

export default JobDescriptionSkeleton;
