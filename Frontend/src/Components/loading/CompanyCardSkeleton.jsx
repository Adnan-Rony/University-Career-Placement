import React from 'react';


const CompanyCardSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 skeleton rounded-full" />
        <div className="space-y-2">
          <div className="h-4 skeleton w-40" />
          <div className="h-4 skeleton w-32" />
        </div>
      </div>
      <div className="h-4 skeleton w-3/4 mb-2" />
      <div className="h-4 skeleton w-5/6 mb-2" />
      <div className="h-4 skeleton w-2/3 mb-4" />
      <div className="h-10 skeleton w-full" />
    </div>
  );
};

export default CompanyCardSkeleton;
