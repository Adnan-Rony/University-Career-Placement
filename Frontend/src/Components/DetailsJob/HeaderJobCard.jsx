import { CiClock1, CiSaveUp2, CiCalendar } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";


const HeaderJobCard = ({ job }) => {
  return (
    <div>
      <div className="px-4 py-8 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-4">
            <img
              src={job?.image}
              alt="Invision Logo"
              className="w-16 h-16 rounded-md object-cover flex-shrink-0"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                {job.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-600 text-sm mt-1 flex-wrap">
                <span className="flex items-center gap-1">Invision</span>
                <span className="flex items-center gap-1">
                  <MdOutlineLocationOn />
                  {job?.location?.city},{job?.location?.state},
                  {job?.location?.country}
                </span>
                <span className="flex items-center gap-1">
                  <CiClock1 />
                  {new Date(job?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <GiMoneyStack />
                  {job?.salaryRange?.min}-{job?.salaryRange?.max}$
                </span>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {job?.jobType}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Apply For Job
            </button>
            <button
              aria-label="Bookmark job"
              className="bg-blue-100 hover:bg-blue-200 transition rounded-md p-2"
            >
              <CiSaveUp2 className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderJobCard;
