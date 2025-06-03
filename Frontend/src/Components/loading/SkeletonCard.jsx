
const SkeletonCard = () => {
  return (
    <div className="container mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      
      
      
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-2xl border border-gray-100 animate-pulse flex flex-col p-6 justify-between space-y-6 hover:shadow-lg transition"
        >
          {/* Header: Title & Bookmark */}
          <div className="flex items-center justify-between">
            <div className="h-4 skeleton w-2/3 bg-gray-200 rounded" />
            <div className="h-5 skeleton w-5 bg-gray-200 rounded-full" />
          </div>

          {/* Company Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 skeleton h-12 bg-gray-200 rounded-xl" />
            <div className="flex flex-col gap-2">
              <div className="h-3 skeleton w-32 bg-gray-200 rounded" />
              <div className="h-3 skeleton w-24 bg-gray-100 rounded" />
            </div>
          </div>

          {/* Job Type */}
          <div className="h-6 w-24 bg-gray-200 rounded-full" />

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <div className="h-10 skeleton bg-gray-200 rounded-lg" />
            <div className="h-10 skeleton bg-gray-200 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
