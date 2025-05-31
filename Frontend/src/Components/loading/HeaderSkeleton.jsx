import React from 'react';

const Skeleton = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const HeaderSkeleton = () => {
  return (
    <div className="px-4 py-10 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-start gap-4">
          <Skeleton className="w-16 h-16 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-4 w-40" />
            <div className="flex gap-2 mt-2">
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="w-32 h-10" />
          <Skeleton className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
