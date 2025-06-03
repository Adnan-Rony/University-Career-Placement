import React from 'react';



const HeaderSkeleton = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-start gap-4">
          <div className="w-16 skeleton h-16 rounded-md" />
          <div className="space-y-2">
            <div className="h-6 skeleton w-48" />
            <div className="h-4 skeleton w-64" />
            <div className="h-4 skeleton w-40" />
            <div className="flex gap-2 mt-2">
              <div className="h-6 skeleton w-20" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-32 skeleton h-10" />
          <div className="w-10 skeleton h-10" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
