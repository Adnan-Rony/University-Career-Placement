import React from 'react';
import HeaderSkeleton from './HeaderSkeleton';
import JobOverviewSkeleton from './JobOverviewSkeleton';
import CompanyCardSkeleton from './CompanyCardSkeleton';
import JobDescriptionSkeleton from './JobDescriptionSkeleton';

const JobDetailsSkeleton = () => {
  return (
    <div className="space-y-6">
      <HeaderSkeleton />

      <div className="max-w-7xl mx-auto px-4 md:px-0 grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 space-y-6">
          <JobDescriptionSkeleton />
        </div>
        <div className="space-y-6">
          <JobOverviewSkeleton />
          <CompanyCardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSkeleton;
