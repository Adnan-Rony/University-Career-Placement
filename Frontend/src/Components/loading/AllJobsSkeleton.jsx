import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllJobsSkeleton = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, idx) => (
       <div className="bg-white p-5 rounded-lg shadow w-full space-y-4 animate-pulse">
      {/* Header with logo and title */}
      <div key={idx} className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 skeleton h-14 bg-gray-300 rounded-md" />
          <div className="h-6 skeleton bg-gray-300 rounded w-48" />
        </div>
        <div className="w-6 skeleton h-6 bg-gray-300 rounded" />
      </div>

      {/* Job details tags */}
      <div className="flex flex-wrap gap-2">
        <div className="h-6 skeleton bg-purple-200 rounded-full w-24" />
        <div className="h-6 skeleton bg-gray-200 rounded-full w-40" />
        <div className="h-6 skeleton bg-gray-200 rounded-full w-36" />
        <div className="h-6 skeleton bg-gray-200 rounded-full w-32" />
      </div>

      {/* Deadline */}
      <div className="h-6 skeleton bg-gray-300 rounded w-48" />

      <hr className="border-gray-200 skeleton" />

      {/* Buttons */}
      <div className="flex justify-between gap-2">
        <div className="h-10 skeleton bg-gray-300 rounded w-24" />
        <div className="h-10 skeleton bg-gray-400 rounded w-24" />
      </div>
    </div>
      ))}
    </div>
  );
};

export default AllJobsSkeleton;
