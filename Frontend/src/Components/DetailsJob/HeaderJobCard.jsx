import {
  CiClock1,
  CiSaveUp2,
  CiCalendar,
  CiCalendarDate,
  CiHeart,
} from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";

import { useState } from "react";
import ApplyJob from "./ApplyJob.jsx";
import { IoBusiness } from "react-icons/io5";
import { FaDollarSign, FaHeart } from "react-icons/fa6";
import moment from "moment/moment.js";

const HeaderJobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(job);

  const handleApply = (applicationData) => {
    console.log("Application submitted", applicationData);

    setShowModal(false);
  };
  return (
    <div
      className="
    "
    >
      <div
        className="px-6 py-10  border border-gray-200
        rounded-lg w-8/12 mx-auto  
       bg-gradient-to-t from-purple-50 via-purple-100 to-purple-200
        
        "
      >
        <div className=" mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="  w-full">
            <div className="  space-y-2">
              <div className=" flex justify-between  items-center">
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="bg-white text-r-primary px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {job?.jobType}
                  </span>
                  <span className="flex items-center gap-1">
                    <CiClock1 className="text-lg" />
                    Posted: {""}
                    {new Date(job?.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="">
                  <button className="btn btn-neutral btn-outline hover:bg-r-background hover:text-black">
                    <CiHeart className="text-2xl" />
                  </button>
                </div>
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-900">
                {job.title}
              </h1>
              {/* Company Name */}
              <h1 className="flex items-center gap-1 text-lg">
                <span>
                  <IoBusiness />
                </span>
                <span className="font-semibold opacity-80">
                  {job?.company?.name}
                </span>
              </h1>

              <div
                className="flex items-center
              
              gap-14 text-gray-600 text-sm mt-3 flex-wrap"
              >
                <span className="flex items-center gap-1">
                  <MdOutlineLocationOn className="text-xl" />
                  {job?.location?.city},{job?.location?.state},
                  {job?.location?.country}
                </span>
                <span className="flex items-center gap-1">
                  <FaDollarSign className="text-xl" />
                  {job?.salaryRange?.min}-{job?.salaryRange?.max}
                </span>
                <span className="flex items-center gap-1">
                  <CiCalendarDate className="text-xl" />
                  {moment(job?.deadline).format("MMMM D, YYYY")}
                </span>
              </div>
              {/*Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full">
                <button
                  onClick={() => setShowModal(true)}
                  className=" mt-3 text-white rounded-md btn bg-r-primary border-none  hover:bg-r-accent w-full"
                >
                  Apply For Job
                </button>

                <ApplyJob
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  onSubmit={handleApply}
                  jobId={job._id}
                />

               
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default HeaderJobCard;
