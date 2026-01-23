import { CiBookmark, CiCalendar } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { Link } from "react-router";
const JobsCards = ({ job, index }) => {
  return (
    <div className="hover:bg-purple-100 hover:rounded-lg ">
      <Link to={`/job/details/${job._id}`}>
        <div
          key={index}
          className=" p-5 rounded-lg shadow hover:shadow-md transition w-full space-y-2 py-8 border border-gray-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img
                src={job?.company?.logo}
                alt="company logo"
                className="w-14 h-14 rounded-md object-cover"
              />
              <div className="">
                <h3 className="font-poppins text-start text-lg font-bold text-gray-900 line-clamp-2">
                  {job.title}
                </h3>
                <p className="font-roboto text-sm text-gray-500 mt-1 text-start">
                  {job?.company?.name}
                </p>
              </div>
            </div>

            <button className="text-gray-400 hover:text-gray-600">
              <CiBookmark className="text-xl" />
            </button>
          </div>

          <div className="font-roboto mt-4  space-x-2 flex flex-wrap gap-2 text-sm text-gray-600">
            <span className="font-poppins capitalize flex items-center gap-1 bg-purple-100 text-purple-700 text-x font-medium px-3 py-1 rounded-full">
              {job?.jobType}
            </span>
            <span className="flex items-center gap-1">
              <MdOutlineLocationOn className="text-xl" />
              {job?.location}, {job?.location?.state}, {job?.location?.country}
            </span>
            <span className="flex items-center gap-1">
              <RxTimer className="text-xl" />
              {new Date(job?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <GiMoneyStack className="text-xl" />
              {job.salaryRange.min} - {job.salaryRange.max}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobsCards;
