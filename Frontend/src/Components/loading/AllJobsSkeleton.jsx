import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllJobsSkeleton = () => {
  return (
    <div className=" container space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto my-10">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="">
          <div className="bg-white p-5 rounded-lg shadow w-full space-y-4 py-8 border border-gray-200 animate-pulse">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 rounded-md" />
                <div className="w-40 h-4 bg-gray-200 rounded" />
              </div>
              <div className="w-6 h-6 bg-gray-200 rounded" />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <div className="h-6 w-20 bg-gray-200 rounded-full" />
              <div className="h-6 w-32 bg-gray-200 rounded-full" />
              <div className="h-6 w-40 bg-gray-200 rounded-full" />
              <div className="h-6 w-28 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllJobsSkeleton;
