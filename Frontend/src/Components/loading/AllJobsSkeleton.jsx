import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllJobsSkeleton = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white p-5 rounded-lg shadow w-full max-w-4xl mx-auto"
        >
          {/* Top: Logo and Title */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Skeleton width={56} height={56} borderRadius="0.375rem" />
              <div>
                <Skeleton width={120} height={20} />
              </div>
            </div>
            <div className="self-start sm:self-center">
              <Skeleton circle width={24} height={24} />
            </div>
          </div>

          {/* Tags / Meta Info */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <Skeleton width={70} height={24} borderRadius="9999px" />
            <Skeleton width={100} height={20} />
            <Skeleton width={80} height={20} />
            <Skeleton width={60} height={20} />
          </div>

          {/* Job Title or Summary */}
          <div className="pt-2">
            <Skeleton width={150} height={20} />
          </div>

          <hr className="border-gray-200 my-4" />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-between">
            <Skeleton width={100} height={36} borderRadius="0.5rem" />
            <Skeleton width={100} height={36} borderRadius="0.5rem" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllJobsSkeleton;
