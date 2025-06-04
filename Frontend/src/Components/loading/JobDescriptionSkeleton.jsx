import React from 'react';



const JobDescriptionSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="h-6 skeleton w-40 mb-4" />
      <div className="h-4 skeleton w-full mb-2" />
      <div className="h-4 skeleton w-5/6 mb-2" />
      <div className="h-4 skeleton w-3/4 mb-4" />
      <div className="h-5 skeleton w-32 mb-3" />
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="flex items-start gap-2 mb-2">
          <div className="w-4 skeleton h-4 rounded-full mt-1" />
          <div className="h-4 skeleton w-full" />
        </div>
      ))}
    </div>
  );
};

export default JobDescriptionSkeleton;
