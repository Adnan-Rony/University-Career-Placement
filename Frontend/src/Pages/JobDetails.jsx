import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiClock1, CiSaveUp2, CiCalendar } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { RxTimer } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import CompanyCard from "../Components/DetailsJob/CompanyCard.jsx";
import { useParams } from "react-router";
import { UseFetchSingleJobById } from "../hooks/useJobs.js";
import HeaderJobCard from "../Components/DetailsJob/HeaderJobCard.jsx";
import JobDescription from "../Components/DetailsJob/JobDescription.jsx";
import JobOverView from "../Components/DetailsJob/JobOverView.jsx";
import JobDetailsSkeleton from "../Components/loading/JobDetailsSkeleton.jsx";

const JobDetails = () => {
  const { id } = useParams();

  const { data: job, isLoading, isError } = UseFetchSingleJobById(id);
  console.log(job);
  if (isLoading)
    return <JobDetailsSkeleton></JobDetailsSkeleton>

  return (
    <div className=" bg-gray-50">
      {/* Header Section */}
      <HeaderJobCard job={job}></HeaderJobCard>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Job Description */}

        <div className="lg:col-span-2 px-4 py-8 ">
          <JobDescription></JobDescription>
        </div>

        {/* Sidebar: Overview & Company */}
        <div className="lg:col-span-1 space-y-4">
          {/* Job Overview */}
          <JobOverView job={job}></JobOverView>

          {/* Company Overview */}
          <div className="">
            <CompanyCard job={job} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
